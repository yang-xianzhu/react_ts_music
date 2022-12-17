import { memo, useState } from 'react'
import Style from './style.module.css'
import { changeIsPlay } from '@/store/modules/playbar'
import store from '@/store'
import { useSelector } from 'react-redux'

function PlayBottom() {
  const { isPlay } = useSelector((state: any) => state.playbar)
  const [playPosition, setPlayPosition] = useState<string>('0 -204px')

  // 是否播放
  function hanglePlay(curState: boolean) {
    store.dispatch(changeIsPlay(curState))
    if (curState) {
      setPlayPosition('-40px -165px')
    } else {
      setPlayPosition('-40px -204px')
    }
  }

  function enterPlay() {
    if (isPlay) {
      setPlayPosition('-40px -165px')
    } else {
      setPlayPosition('-40px -204px')
    }
  }

  function leavePlay() {
    if (isPlay) {
      setPlayPosition('0 -165px')
    } else {
      setPlayPosition('0 -204px')
    }
  }
  return (
    <>
      {/* 左侧播放按钮组 */}
      <div className={Style['btns']}>
        <span title="上一首" className="yxz-playbar">
          上一首
        </span>
        <span
          title={isPlay ? '暂停' : '播放'}
          className="yxz-playbar"
          onClick={() => {
            // 自身状态维护
            hanglePlay(!isPlay)
          }}
          style={{
            backgroundPosition: playPosition
          }}
          onMouseEnter={enterPlay}
          onMouseLeave={leavePlay}
        >
          播放
        </span>
        <span title="下一首" className="yxz-playbar">
          下一首
        </span>
      </div>
    </>
  )
}

export default memo(PlayBottom)
