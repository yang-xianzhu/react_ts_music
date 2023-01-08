export interface TLimit {
  limit: string | number
}

// 榜单id
export interface ITopListDetail {
  id: number
}

// Response
export interface IResult<T = any> {
  code: number
  message: string
  data: T
}

// 全部新碟
export interface IAllAlbum {
  area: string
  limit: number
  offset: number
}
