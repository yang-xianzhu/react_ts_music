import request from './index'
import type { TLimit } from './type'

export const getAlbumList = (params: TLimit) => {
  return request({
    url: '/album/newest',
    params
  })
}
