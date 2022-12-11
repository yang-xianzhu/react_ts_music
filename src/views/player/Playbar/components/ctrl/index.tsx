import { memo, useEffect, useState } from 'react'
import Style from './style.module.css'

function Ctrl() {
  const [active, setActive] = useState<boolean>(false)
  const [timer, setTimer] = useState<number | null>(null)
  const [currentStateNum, setCurrentStateNum] = useState<number>(1)
  const [isMouseIn, setIsMouseIn] = useState<boolean>(false)
  // 当前状态
  const [currentState, setCurrentState] = useState<{
    position: string
    text: string
  }>({} as { position: string; text: string })

  // 播放模式状态对象
  const stateObj: {
    [k in string]: () => void
  } = {
    1: () => {
      setCurrentState({
        position: isMouseIn ? '-93px -344px' : '-66px -344px',
        text: '单曲循环'
      })
    },
    2: () => {
      setCurrentState({
        position: isMouseIn ? '-33px -344px' : '-3px -344px',
        text: '循环'
      })
    },
    3: () => {
      setCurrentState({
        position: isMouseIn ? '-93px -248px' : '-66px -248px',
        text: '随机'
      })
    }
  }

  // 切换状态 ---> 更新状态
  useEffect(() => {
    stateObj[currentStateNum]()
  }, [currentStateNum, isMouseIn])

  function handleMode() {
    setCurrentStateNum((cur) => {
      if (cur >= Object.keys(stateObj).length) {
        return 1
      } else {
        return ++cur
      }
    })

    setActive(true)

    if (timer) {
      clearTimeout(timer)
    }

    const t = setTimeout(() => {
      setActive(false)
    }, 2000)

    setTimer(t)
  }
  return (
    <>
      <div className={Style['ctrl']}>
        <span
          className={`yxz-playbar ${Style['volume']}`}
          style={{
            backgroundPosition: '-2px -248px'
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
          title={currentState.text}
          style={{
            backgroundPosition: currentState.position
          }}
        >
          播放模式
        </span>
        {/* 播放列表 */}
        <div className={`${Style['add']}`}>
          <span
            className={`yxz-playbar ${Style['icn-list']}`}
            title="播放列表"
          ></span>
          <span className={`${Style['text']}`}>8</span>
        </div>
        <div
          className={`yxz-playbar ${Style['tip']}`}
          style={{
            display: active ? 'block' : 'none'
          }}
        >
          {currentState.text}
        </div>
      </div>
    </>
  )
}

export default memo(Ctrl)
