import { RouteObject } from 'react-router-dom'
import { Discover } from '@/views/discover/index'
import Mine from '@/views/mine'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Discover />
  },
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/mine',
    element: <Mine />
  }
]

export default routes
