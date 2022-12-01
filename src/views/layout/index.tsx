import { useRoutes } from 'react-router-dom'
import { memo, Suspense } from 'react'
import routes from '@/router'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Footer'

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
  </>
)

export default memo(Layout)
