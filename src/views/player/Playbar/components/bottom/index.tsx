import { memo, useState } from 'react'
import Style from './style.module.css'

function PlayBottom(props: {
  handlePlayState: (playState: boolean, cb: () => void) => void
  getIsPlay: (state: boolean) => void
}) {
  const [isPlay, setIsPlay] = useState<boolean>(false)
  const [playPosition, setPlayPosition] = useState<string>('0 -204px')
  // 是否播放
  function hanglePlay() {
    setIsPlay((current) => {
      props.getIsPlay(!current)
      if (!current) {
        setPlayPosition('-40px -165px')
      } else {
        setPlayPosition('-40px -204px')
      }
      return !current
    })
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
            // 更新父组件的播放状态,并传递一个设置播放状态的回调给父组件，但播放失败，父组件手动设置播放状态
            props.handlePlayState(!isPlay, () => {
              console.log('播放出错啦')
              // 暂停播放
              setIsPlay(false)
            })

            // 自身状态维护
            hanglePlay()
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
