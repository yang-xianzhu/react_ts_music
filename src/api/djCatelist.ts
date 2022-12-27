import http from '.'

interface IHttp {
  limit?: number
}

// 获取电台 - 分类
export const getDjCateList = () => http.get(`/dj/catelist`)

// 推荐节目
export const getProgramRecommend = (params?: IHttp) =>
  http.get(
    params?.limit
      ? `/program/recommend?limit=${params.limit}`
      : `/program/recommend`
  )

// 电台-节目榜
export const getDjProgramToplist = (params?: IHttp) =>
  http.get(
    params?.limit
      ? `/dj/program/toplist?limit=${params.limit}`
      : `/dj/program/toplist`
  )
