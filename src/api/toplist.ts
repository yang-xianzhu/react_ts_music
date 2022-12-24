import http from '.'

// 获取所有榜单数据
export const getTopListAll = () => http.get(`/toplist`)

// 根据榜单id获取详情
export const getTopListDetail = (id: number) =>
  http.get(`/playlist/detail?id=${id}`)
