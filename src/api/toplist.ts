import http from '.'

interface IBaseType {
  limit: number
  offset: number
}

export interface IPlayListTop extends IBaseType {
  cat: string
  order: string
}

// 获取所有榜单数据
export const getTopListAll = () => http.get(`/toplist`)

// 根据榜单id获取详情
export const getTopListDetail = (id: number) =>
  http.get(`/playlist/detail?id=${id}`)

const initallParams: IPlayListTop = {
  offset: 0, // 偏移量
  limit: 35, // 每次请求多少条
  cat: '全部',
  order: 'hot' // 类型
}

// 歌单分类
export const getTopPlayList = (params: IPlayListTop = initallParams) =>
  http.get(
    `top/playlist?order=${params.order}&cat=${params.cat}&limit=${params.limit}&order=${params.order}&offest=${params.offset}`
  )

// 获取榜单分类数据
export const getCatList = () => http.get(`/playlist/catlist`)
