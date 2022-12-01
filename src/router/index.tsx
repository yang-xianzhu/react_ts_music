import { RouteObject, Navigate } from 'react-router-dom'
import { lazy } from 'react'

// 一级路由
const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

// 二级路由
const Recomment = lazy(() => import('@/views/discover/child-views/recommend'))
const TopList = lazy(() => import('@/views/discover/child-views/toplist'))
const PlayList = lazy(() => import('@/views/discover/child-views/playlist'))
const Djradio = lazy(() => import('@/views/discover/child-views/djradio'))
const Artist = lazy(() => import('@/views/discover/child-views/djradio'))
const Album = lazy(() => import('@/views/discover/child-views/album'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      { path: '/discover', element: <Navigate to="/discover/recomment" /> },
      { path: '/discover/recomment', element: <Recomment /> },
      { path: '/discover/toplist', element: <TopList /> },
      { path: '/discover/playlist', element: <PlayList /> },
      { path: '/discover/djradio', element: <Djradio /> },
      { path: '/discover/artist', element: <Artist /> },
      { path: '/discover/album', element: <Album /> }
    ]
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
