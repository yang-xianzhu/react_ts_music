import { memo, useEffect, useState } from 'react'
import Style from './style.module.css'
import type { IState } from './type'

function Lock(props: { getLockState: (state: boolean) => void }) {
  const [isMouseIn, setMouseIn] = useState(false)
  const [lockState, setLockState] = useState<IState>({} as IState)
  const [isLock, setIsLock] = useState(true)

  const STATE = {
    1: () => {
      setLockState({
        position: isMouseIn ? '-100px -400px' : '-100px -380px',
        isLock: true
      })
    },
    2: () => {
      setLockState({
        position: isMouseIn ? '-80px -400px' : '-80px -380px',
        isLock: false
      })
    }
  }

  useEffect(() => {
    if (isLock) {
      STATE['1']()
    } else {
      STATE['2']()
    }
  }, [isMouseIn, isLock])

  function hangleLock() {
    setIsLock((cur) => {
      props.getLockState(!cur)
      return !cur
    })
  }

  function enterLock() {
    setMouseIn(true)
  }

  function leaveLock() {
    setMouseIn(false)
  }

  return (
    <>
      <div className={`yxz-playbar ${Style['lock']}`}>
        <span
          className="yxz-playbar"
          title={!lockState.isLock ? '锁定' : '解锁'}
          style={{
            backgroundPosition: lockState.position
          }}
          onClick={() => {
            hangleLock()
          }}
          onMouseEnter={enterLock}
          onMouseLeave={leaveLock}
        ></span>
      </div>
    </>
  )
}

export default memo(Lock)
