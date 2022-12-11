import { useRoutes } from 'react-router-dom'
import { memo, Suspense } from 'react'
import routes from '@/router'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Footer'
import Playbar from '@/views/player/Playbar'

const Layout = () => (
  <>
    {/* 头部导航栏 */}
    <Header />
    {/* 一级路由导航栏 */}
    <Suspense fallback={''}>
      <div>
        <div>{useRoutes(routes)}</div>
      </div>
    </Suspense>
    {/* 底部 */}
    <Footer />
    {/* 底部播放条 */}
    <Playbar />
  </>
)

export default memo(Layout)
