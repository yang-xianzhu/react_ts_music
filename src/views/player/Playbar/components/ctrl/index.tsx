import { memo, useEffect, useMemo, useState } from 'react'
import Style from './style.module.css'
import { Slider } from 'antd'
import { useSelector } from 'react-redux'
import store from '@/store'
import { changePlayMode } from '@/store/modules/player/player'

const Ctrl = (props: {
  getVol: (val: number) => void
  handleSongTitle: (state: boolean) => void
}) => {
  // 获取当前播放歌曲信息
  const { playSongList, playMode } = useSelector((state: any) => state.player)

  const [timer, setTimer] = useState<number | null>(null)
  const [active, setActive] = useState<boolean>(false)
  const [currentStateNum, setCurrentStateNum] = useState<number>(1)
  const [isMouseIn, setIsMouseIn] = useState<boolean>(false)
  // 当前播放状态
  const [currentState, setCurrentState] = useState<string>('')
  // 播放模式状态对象

  const playModeArr = useMemo<Array<string>>(
    () => ['单曲循环', '循环', '随机'],
    []
  )

  const stateObj = useMemo<{ [k in string]: () => void }>(
    () => ({
      1: () => {
        setCurrentState(isMouseIn ? '-93px -344px' : '-66px -344px')
      },
      2: () => {
        setCurrentState(isMouseIn ? '-33px -344px' : '-3px -344px')
      },
      3: () => {
        setCurrentState(isMouseIn ? '-93px -248px' : '-66px -248px')
      }
    }),
    [isMouseIn]
  )

  // 是否显示音量条
  const [isShowVolume, setShowVolume] = useState<boolean>(false)
  const [currentVolState, setVolState] = useState<string>('')
  const [isInVol, setIsInVol] = useState<boolean>(false)
  // 当前的音量值
  const [curVol, setCurVol] = useState<number>(60)
  // 音量状态
  const VolState: { [k in string]: () => void } = {
    // 有声音
    1: () => {
      setVolState(isInVol ? '-31px -248px' : '-2px -248px')
    },
    // 没声音
    2: () => {
      setVolState(isInVol ? '-126px -69px' : '-104px -69px')
    }
  }

  useEffect(() => {
    // 初始化
    if (curVol === 0) {
      VolState[2]()
    } else {
      VolState[1]()
    }
  }, [isInVol, curVol])

  // 切换播放状态 ---> 更新状态
  useEffect(() => {
    stateObj[playMode]()
  }, [playMode, isMouseIn])

  function handleMode() {
    playMode >= playModeArr.length
      ? store.dispatch(changePlayMode(1))
      : store.dispatch(changePlayMode(playMode + 1))

    // 控制播放模式显隐
    delayNone([timer, setTimer, setActive])
  }

  function delayNone([timer, setTimer, setVal]: any[]) {
    setVal(true)

    if (timer) {
      clearTimeout(timer)
    }

    const t = setTimeout(() => {
      setVal(false)
    }, 2000)

    setTimer(t)
  }

  return (
    <>
      <div className={Style['ctrl']}>
        <span
          className={`yxz-playbar`}
          style={{
            backgroundPosition: currentVolState
          }}
          onClick={() => {
            // 切换音量显隐
            setShowVolume((cur) => !cur)
          }}
          onMouseEnter={() => {
            setIsInVol(true)
          }}
          onMouseLeave={() => {
            setIsInVol(false)
          }}
        >
          音量
        </span>
        <span
          className={`yxz-playbar ${Style['play-mode']}`}
          onClick={() => {
            handleMode()
          }}
          onMouseEnter={() => {
            setIsMouseIn(true)
          }}
          onMouseLeave={() => {
            setIsMouseIn(false)
          }}
          title={playModeArr[playMode - 1]}
          style={{
            backgroundPosition: currentState
          }}
        >
          播放模式
        </span>
        {/* 播放列表 */}
        <div
          className={`${Style['add']}`}
          onClick={() => {
            props.handleSongTitle(true)
          }}
        >
          <span
            className={`yxz-playbar ${Style['icn-list']}`}
            title="播放列表"
          ></span>
          <span className={`${Style['text']}`}>{playSongList.length}</span>
        </div>
        {/* 播放模式tip */}
        <div
          className={`yxz-playbar ${Style['tip']}`}
          style={{
            display: active ? 'block' : 'none'
          }}
        >
          {playModeArr[playMode - 1]}
        </div>
        {/* 音量操作盒子 */}
        <div
          className={`yxz-playbar vol-slider ${Style['vol']}`}
          style={{
            opacity: isShowVolume ? '1' : '0'
          }}
        >
          <Slider
            vertical
            defaultValue={curVol}
            onAfterChange={(val: number) => {
              props.getVol(val)
              setCurVol(val)
            }}
            onChange={(val: number) => {
              props.getVol(val)

              setCurVol(val)
            }}
            tooltip={{ formatter: null }}
          />
        </div>
      </div>
    </>
  )
}

export default memo(Ctrl)
