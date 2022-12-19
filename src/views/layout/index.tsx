import { useRoutes, useLocation } from 'react-router-dom'
import { memo, Suspense } from 'react'
import routes from '@/router'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Footer'
import Playbar from '@/views/player/Playbar'

const Layout = () => {
  const { pathname } = useLocation()
  return (
    <>
      {/* 头部导航栏 */}
      <Header />
      {/* 一级路由导航栏 */}
      <div style={{ backgroundColor: '#C20C0C', height: '5px' }}></div>
      <div
        style={{
          background: pathname.includes('/discover') ? '' : '#f5f5f5'
        }}
      >
        <Suspense fallback={''}>{useRoutes(routes)}</Suspense>
      </div>
      {/* 底部 */}
      <Footer />
      {/* 底部播放条 */}
      <Playbar />
    </>
  )
}

export default memo(Layout)
