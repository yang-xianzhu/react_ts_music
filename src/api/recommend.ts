import request from '@/api'

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
