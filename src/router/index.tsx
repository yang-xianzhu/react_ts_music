import { RouteObject } from 'react-router-dom'
import { Discover } from '@/views/discover/index'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Discover />
  },
  {
    path: '/discover',
    element: <Discover />
  }
]

export default routes
