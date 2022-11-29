import { RouteObject, Navigate } from 'react-router-dom'
import { lazy } from 'react'

// 一级路由
const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

// 二级路由
const Recomment = lazy(() => import('@/views/discover/child-views/recommend'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [{ path: '/discover', element: <Recomment /> }]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
