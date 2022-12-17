import { memo, useEffect, useState } from 'react'
import Style from './style.module.css'
import type { IState } from './type'
import store from '@/store'
import { changeIsLock } from '@/store/modules/playbar'
import { useSelector } from 'react-redux'

function Lock() {
  const [isMouseIn, setMouseIn] = useState<boolean>(false)
  const [lockState, setLockState] = useState<string>('')

  const { isLock } = useSelector((state: any) => state.playbar)

  const STATE = {
    1: () => {
      setLockState(isMouseIn ? '-100px -400px' : '-100px -380px')
    },
    2: () => {
      setLockState(isMouseIn ? '-80px -400px' : '-80px -380px')
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
    store.dispatch(changeIsLock(!isLock))
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
          title={!isLock ? '锁定' : '解锁'}
          style={{
            backgroundPosition: lockState
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
