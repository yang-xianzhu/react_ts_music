import { memo, FC } from 'react'
import type { IHeaderInfo } from './type'
import headerStyle from './style.module.css'

const Header: FC<IHeaderInfo> = (props) => {
  const { infos } = props
  return (
    <>
      <div className={headerStyle['header']}>
        {/* 圆点图标 */}
        <i className={headerStyle['dot']}></i>
        <p>热门推荐</p>
        <ul>
          {infos.map((v) => (
            <li key={v.text}>
              <span>{v.text}</span>
            </li>
          ))}
        </ul>
        <span>
          更多<i className={headerStyle['more-icon']}></i>
        </span>
      </div>
    </>
  )
}

export default memo(Header)
