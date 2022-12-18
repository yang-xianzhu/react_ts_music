import { memo, useState, useRef, useEffect, FC } from 'react'
import { useSelector } from 'react-redux'
import Style from './style.module.css'
import PlayBottom from './components/bottom'
import Middle from './components/middle'
import RightOpen from './components/right'
import Ctrl from './components/ctrl'
import Lock from './components/lock'
import PlayList from './components/playList'
import { getCurrentSongUrl } from '@/api/player'
import store from '@/store'
import { changeCurrentLyricsIdx } from '@/store/modules/player/player'
import { changeIsPlay } from '@/store/modules/playbar'

const Playbar: FC = () => {
  // 获取当前播放歌曲信息
  const { currentSong, lyrics, lyricsIdx } = useSelector(
    (state: any) => state.player
  )

  const [bottom, setBottom] = useState<string>('0')

  // 获取当前播放状态
  const { isPlay, isLock } = useSelector((state: any) => state.playbar)
  // 获取音频ref
  const audioRef = useRef<HTMLAudioElement>(null)
  // 当前播放进度条
  const [curPlayBar, setCurPlayBar] = useState<number>(0)
  // 当前音乐总时长
  const [duration, setDuration] = useState<number>(0)
  // 当前播放时间
  const [currentTime, setCurrentTime] = useState<number>(0)

  // 是否正在拖拽歌曲进度条
  const [isSliding, setIsSliding] = useState<boolean>(false)

  // 是否显示歌词
  const [isShowSongTitle, setShowSongTitle] = useState<boolean>(false)

  // 侦听播放状态
  useEffect(() => {
    // console.log('当前的播放状态:', isPlay)
    if (isPlay) {
      audioRef.current!.play().catch(() => {
        console.log('播放进去了catch')
        store.dispatch(changeIsPlay(false))
      })
    } else {
      audioRef.current!.pause()
    }
  }, [isPlay])

  // 根据歌曲ID获取歌曲url
  useEffect(() => {
    // 设置音乐播放总时长
    setDuration(currentSong.dt)
    // 获取歌曲、歌词
    handleCurrentSongUrl(currentSong.id)
  }, [currentSong])

  // 设置默认音量
  useEffect(() => {
    audioRef.current!.volume = 0.6
  }, [])

  function handleCurrentSongUrl(id: number) {
    getCurrentSongUrl({
      id
    }).then((res: any) => {
      audioRef.current!.src = res.data[0].url
    })
  }

  // 获取当前音乐播放时间
  function getCurrentTime(timer: number) {
    // 更新当前歌曲的进度
    audioRef.current!.currentTime = timer / 1000 // 转换成秒
  }

  // 获取当前是否正在拖拽
  function getIsSliding(isSilding: boolean) {
    if (isSilding) {
      // 如果正在拖拽，暂停播放
      audioRef.current!.pause()
    } else {
      // 释放拖拽就正常播放
      if (isPlay) {
        console.log('正在处于播放状态，正常播放')
        audioRef.current!.play()
      } else {
        console.log('正在处于暂停状态！')
      }
    }
    setIsSliding(isSilding)
  }

  // 获取当前的进度条
  function getCurPlayBar(val: number) {
    // 拖拽同步进度条
    setCurPlayBar(val)
  }

  function getCurrentTimeText(val: number) {
    setCurrentTime(val)
  }

  // 切换歌词显隐状态
  function handleSongTitle(state: boolean) {
    setShowSongTitle(state)
  }

  // 设置播放时间和进度条
  function handleTimeAndPlaybar() {
    // 获取当前播放时间
    const curTime = audioRef.current!.currentTime * 1000
    const progressTime = (curTime / duration) * 100

    // 设置当前播放时间
    setCurrentTime(curTime)
    setCurPlayBar(progressTime)
  }

  // 设置歌词
  function handlePlayTitle() {
    const curTime = audioRef.current!.currentTime * 1000

    let index = -1
    for (let i = 0; i < lyrics.length; i++) {
      if (lyrics[i].time > curTime) {
        index = i === lyrics.length - 1 ? i : i - 1
        break
      }
    }
    // 记录当前播放中的歌词
    if (index !== lyricsIdx) {
      store.dispatch(changeCurrentLyricsIdx(index))
      // console.log('@@@', index)
      // console.log(lyrics[index]?.text)
    }
  }

  return (
    <>
      <div
        className={Style['palybar']}
        onMouseEnter={() => {
          setBottom('0')
        }}
        onMouseLeave={() => {
          if (!isLock) {
            setBottom('-42px')
          }
        }}
        style={{
          bottom
        }}
      >
        <div className={`mini-warp ${Style['context']}`}>
          {/* 歌词盒子 */}
          {isShowSongTitle && <PlayList {...{ handleSongTitle }} />}
          {/* 左侧播放按钮组 */}
          <PlayBottom />
          {/* 中间播放进度条 */}
          <Middle
            {...{
              currentSong,
              curPlayBar,
              duration,
              currentTime,
              getCurrentTime,
              getIsSliding,
              getCurPlayBar,
              getCurrentTimeText
            }}
          />
          {/* 右侧按钮 */}
          <RightOpen />
          <Ctrl
            {...{
              getVol: (val: number) => {
                audioRef.current!.volume = val / 100
              },
              handleSongTitle
            }}
          />
        </div>
        {/* 锁定解锁按钮 */}
        <Lock />
        {/* 歌曲音频 */}
        <audio
          ref={audioRef}
          onTimeUpdate={() => {
            // 如果正在拖拽就不更新播放状态
            if (!isSliding) {
              // 设置播放时间和进度条
              handleTimeAndPlaybar()
              // 设置当前歌词
              handlePlayTitle()
            }
          }}
        />
      </div>
    </>
  )
}

export default memo(Playbar)
