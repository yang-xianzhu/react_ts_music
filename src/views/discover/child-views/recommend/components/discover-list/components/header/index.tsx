import { memo, FC } from 'react'
import type { IHeaderInfo } from './type'
import headerStyle from './style.module.css'

const Header: FC<IHeaderInfo> = (props) => {
  const { infos, title, onClick = () => {} } = props
  return (
    <>
      <div className={headerStyle['header']}>
        {/* 圆点图标 */}
        <i className={headerStyle['dot']}></i>
        <p>{title}</p>
        {infos && infos.length > 0 && (
          <ul>
            {infos.map((v) => (
              <li
                key={v.text}
                onClick={() => {
                  onClick(v)
                }}
              >
                <span>{v.text}</span>
              </li>
            ))}
          </ul>
        )}
        <span className="small-text-size ">
          更多<i className={headerStyle['more-icon']}></i>
        </span>
      </div>
    </>
  )
}

export default memo(Header)
