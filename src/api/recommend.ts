import request from '@/api'
import { ITopListDetail } from './type'

// 轮播图数据
export const getBannerList = () =>
  request({
    method: 'get',
    url: '/api/banner'
  })

// 热门推荐
export const getPersonalized = (params: any) =>
  request({
    method: 'get',
    url: '/api/personalized',
    params
  })

// 榜单
export const getTopListDetail = (params: ITopListDetail) =>
  request({
    method: 'get',
    url: `/api/playlist/detail?id=${params.id}`
  })

// 入驻歌手
export const getArtistList = (params: { limit: number }) =>
  request({
    method: 'get',
    url: `/api/artist/list`,
    params
  })

// 热门主播
export const getHoterList = (params: { type: string; limit: number }) =>
  request({
    method: 'get',
    url: `/api/dj/toplist`,
    params
  })
