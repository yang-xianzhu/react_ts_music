import { memo } from 'react'
import Style from './style.module.css'

function RightOpen() {
  return (
    <>
      <div className={Style['right']}>
        <span className={`${Style['icn-pip']}`}>画中画歌词</span>
        <span className={`yxz-playbar ${Style['like']}`}>收藏</span>
        <span className={`yxz-playbar ${Style['icn-share']}`}>分享</span>
      </div>
    </>
  )
}

export default memo(RightOpen)
