import { memo, FC } from 'react'
import type { ISingerHead } from './type'
import SingerStyle from './style.module.css'

const SingerHeader: FC<ISingerHead> = (props) => {
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
