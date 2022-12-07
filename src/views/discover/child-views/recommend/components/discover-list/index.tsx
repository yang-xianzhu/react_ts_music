import { memo } from 'react'
import discoverListStyle from './style.module.css'
import MyInfo from './components/myinfo'
import Singer from './components/singer'
import List from './components/list'
import Newdisc from './components/newdisc'
const DiscoverList = () => {
  return (
    <>
      <div style={{ paddingRight: '8px' }}>
        <div
          className={`${discoverListStyle.warp} ${discoverListStyle['discoverList-container']}`}
        >
          <div className={discoverListStyle['discoverList-left']}>
            {/* 列表区域 */}
            <div
              style={{
                padding: `20px 20px 40px`
              }}
            >
              {/* 热门推荐 */}
              <List />
              {/* 新碟上架 */}
              <Newdisc />
            </div>
            {/* 热门推荐 */}
          </div>
          <div className={discoverListStyle['discoverList-right']}>
            {/* 用户登录 */}
            <MyInfo />
            {/* 入驻歌手/热门主播 */}
            <Singer />
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(DiscoverList)
