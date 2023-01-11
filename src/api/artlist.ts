import http from '.'

interface IParams {
  limit?: number
  type: -1 | 1 | 2 | 3
  area: -1 | 7 | 96 | 8 | 16 | 0
  initial?: string | number
}

// 歌手分类列表

// type=1&area=96&initial=b 返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列, 热门传-1,#传 0

// type 取值:

// -1:全部 1:男歌手 2:女歌手 3:乐队

// area 取值:

// -1:全部 7华语 96欧美 8:日本 16韩国 0:其他
export const getArtList = ({ type, area, initial = -1, limit = 30 }: IParams) =>
  http.get(
    `/artist/list?type=${type}&area=${area}&initial=${initial}&limit=${limit}`
  )
