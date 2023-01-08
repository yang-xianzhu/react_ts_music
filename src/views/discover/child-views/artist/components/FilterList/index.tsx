import { FC, memo } from 'react'
import Style from './style.module.css'

const FilterList: FC = () => {
  return (
    <>
      <div className={`border-right border-left ${Style['filter-container']}`}>
        <div className={Style['item']}>
          <h2 className={Style['title']}>推荐</h2>
          <ol className={Style['nav']}>
            <li>
              <span className={`yxz-singer`}>推荐歌手</span>
            </li>
            <li>
              <span className={`yxz-singer`}>入驻歌手</span>
            </li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default memo(FilterList)
