import { useRoutes } from 'react-router-dom'
import { memo } from 'react'
import routes from '@/router'
import Header from '@/components/Layout/Header'
import indexStyle from '@/assets/styles/index.module.css'
import useWarp from '@/hooks/useWarp'

const Layout = () => (
  <>
    <Header />
    <div className={indexStyle.warp}>{useWarp(useRoutes(routes))}</div>
  </>
)

export default memo(Layout)
