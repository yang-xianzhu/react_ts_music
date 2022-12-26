import http from '.'

// 获取电台 - 分类
export const getDjCateList = () => http.get(`/dj/catelist`)

// 推荐节目
export const getProgramRecommend = () => http.get(`/program/recommend`)
