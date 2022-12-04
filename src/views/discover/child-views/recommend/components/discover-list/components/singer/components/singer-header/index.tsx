import { memo } from 'react'
import type { ISingerHead } from './type'
import SingerStyle from './style.module.css'
function SingerHeader(props: ISingerHead) {
  const { title, isShowRightTitle = true } = props
  return (
    <>
      <div className={SingerStyle['header']}>
        <strong>{title}</strong>
        {isShowRightTitle && <span>查看全部{` >`}</span>}{' '}
      </div>
    </>
  )
}

export default memo(SingerHeader)
