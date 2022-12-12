import request from './index'
import type { TLimit } from './type'

export const getAlbumList = (params: TLimit) => {
  return request({
    url: '/api/album/newest',
    params
  })
}
