import http from '@/api'
import { ITopListDetail, TLimit } from './type'

// 轮播图数据
export const getBannerList = () => http.get('/banner')

// 热门推荐
export const getPersonalized = (params: TLimit) =>
  http.get('/personalized', params)

// 榜单
export const getTopListDetail = (params: ITopListDetail) =>
  http.get(`/playlist/detail?id=${params.id}`)

// 入驻歌手
export const getArtistList = (params: TLimit) =>
  http.get('/artist/list', params)

// 热门主播
export const getHoterList = (params: { type: string } & TLimit) =>
  http.get('/dj/toplist', params)
