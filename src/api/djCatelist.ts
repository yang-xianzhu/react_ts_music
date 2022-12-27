import http from '.'

interface IHttp {
  limit?: number
}

// 获取电台 - 分类
export const getDjCateList = () => http.get(`/dj/catelist`)

// 推荐节目
export const getProgramRecommend = () => http.get(`/program/recommend`)

// 电台-节目榜
export const getDjProgramToplist = ({ limit = 10 }: IHttp) =>
  http.get(`/dj/program/toplist?limit=${limit}`)
