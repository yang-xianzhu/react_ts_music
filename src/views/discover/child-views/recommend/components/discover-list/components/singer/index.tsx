import { memo } from 'react'
import HotHost from './components/hot-host'
import SingerList from './components/singer-list'

function Singer() {
  return (
    <>
      <div
        style={{
          marginTop: '15px',
          padding: '0 18px'
        }}
      >
        {/* 入驻歌手 */}
        <SingerList />
        {/* 热门主播 */}
        <HotHost />
      </div>
    </>
  )
}

export default memo(Singer)
