import http from './index'
import type { TLimit } from './type'

export const getAlbumList = (params: TLimit) =>
  http.get('/album/newest', params)
