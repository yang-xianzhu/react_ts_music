import request from './index'

export const getBannerList = () =>
  request({
    method: 'get',
    url: '/banner'
  })
