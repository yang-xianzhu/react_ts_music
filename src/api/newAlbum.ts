import http from './index'
import type { TLimit, IAllAlbum } from './type'

export const getAlbumList = (params: TLimit) =>
  http.get('/album/newest', params)

// 新碟上架-热门新碟
export const getAlbumHotList = () => http.get('/album/newest')

export const getAllAlbumList = ({ area, limit, offset }: IAllAlbum) =>
  area
    ? http.get(`/album/new?area=${area}&limit=${limit}&offset=${offset}`)
    : http.get(`/album/new?limit=${limit}&offset=${offset}`)
