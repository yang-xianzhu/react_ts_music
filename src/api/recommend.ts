import request from '@/api'
import { ITopListDetail } from './type'

// 轮播图数据
export const getBannerList = () =>
  request({
    method: 'get',
    url: '/banner'
  })

// 热门推荐
export const getPersonalized = (params: any) =>
  request({
    method: 'get',
    url: '/personalized',
    params
  })

// 榜单
export const getTopListDetail = (params: ITopListDetail) =>
  request({
    method: 'get',
    url: `/playlist/detail?id=${params.id}`
  })

// 入驻歌手
export const getArtistList = (params: { limit: number }) =>
  request({
    method: 'get',
    url: `/artist/list`,
    params
  })

// 热门主播
export const getHoterList = (params: { type: string; limit: number }) =>
  request({
    method: 'get',
    url: `/dj/toplist`,
    params
  })
