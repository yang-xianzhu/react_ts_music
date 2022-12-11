import { memo, useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Style from './style.module.css'
import PlayBottom from './components/bottom'
import Middle from './components/middle'
import RightOpen from './components/right'
import Ctrl from './components/ctrl'
import { getCurrentSongUrl } from '@/api/player'

function Playbar() {
  // 获取当前播放歌曲信息
  const { currentSong } = useSelector((state: any) => state.player)
  // 是否锁定playbar
  const [isLock, setIsLock] = useState<boolean>(true)
  const [position, setPosition] = useState<string>('-100px -380px')
  const [bottom, setBottom] = useState<string>('0')

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

  // 根据歌曲ID获取歌曲url
  useEffect(() => {
    getCurrentSongUrl({
      id: 1876100097
    }).then((res) => {
      audioRef.current!.src = res.data[0].url
      // console.log('歌曲加载完成')
    })
  }, [])

  // 设置当前音乐的总时长
  useEffect(() => {
    setDuration(currentSong.dt)
  }, [])

  function hangleLock() {
    setIsLock((current) => {
      if (!current) {
        setPosition('-100px -380px')
      } else {
        setPosition('-80px -400px')
      }
      return !current
    })
  }

  // 锁住/解锁
  function enterLock() {
    if (isLock) {
      setPosition('-100px -380px')
    } else {
      setPosition('-80px -400px')
    }
  }

  function leaveLock() {
    if (isLock) {
      setPosition('-100px -380px')
    } else {
      setPosition('-80px -380px')
    }
  }

  // 切换播放状态
  function handlePlayState(playState: boolean, cb: () => void) {
    if (playState) {
      audioRef.current!.play().catch(() => {
        // 需要重新维护播放状态按钮
        cb()
      })
    } else {
      audioRef.current!.pause()
    }
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
      //  释放拖拽就正常播放
      audioRef.current!.play()
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
          {/* 左侧播放按钮组 */}
          <PlayBottom {...{ handlePlayState }} />
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
          <Ctrl />
        </div>
        {/* 锁定解锁按钮 */}
        <div className={`yxz-playbar ${Style['lock']}`}>
          <span
            className="yxz-playbar"
            title={!isLock ? '锁定' : '解锁'}
            style={{
              backgroundPosition: position
            }}
            onClick={() => {
              hangleLock()
            }}
            onMouseEnter={enterLock}
            onMouseLeave={leaveLock}
          ></span>
        </div>
        {/* 歌曲音频 */}
        <audio
          ref={audioRef}
          onTimeUpdate={() => {
            // 如果正在拖拽就不更新播放状态
            if (!isSliding) {
              // 获取当前播放时间
              const curTime = audioRef.current!.currentTime * 1000
              const progressTime = (curTime / duration) * 100

              // 设置当前播放时间
              setCurrentTime(curTime)
              setCurPlayBar(progressTime)
              // console.log('当前播放时间', progressTime)
            }
          }}
        />
      </div>
    </>
  )
}

export default memo(Playbar)
