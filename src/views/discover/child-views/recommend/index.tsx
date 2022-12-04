import { memo } from 'react'
import Banner from './components/banner'
import DiscoverList from './components/discover-list'
const Recomment = () => {
  return (
    <>
      {/* 轮播图 */}
      <Banner />
      {/* 主体列表区域 */}
      <DiscoverList />
    </>
  )
}

export default memo(Recomment)
