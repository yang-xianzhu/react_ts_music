import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Subnav from './components/Subnav'
import indexStyle from '@/assets/styles/index.module.css'
import subnavCss from './components/Subnav/style.module.css'
const Discover = () => {
  return (
    <>
      <div className={subnavCss['m-subnav']}>
        <div className={indexStyle.warp}>
          <Subnav />
        </div>
      </div>
      {/* 主体部分 */}
      <Suspense>
        {/* 二级路由出口 */}
        <Outlet />
      </Suspense>
    </>
  )
}

export default Discover
