import http from '.'

interface IGetIds {
  ids: number
}

interface IGetId {
  id: number
}

// 根据id获取音乐url
export const getCurrentSongUrl = (params: IGetId) =>
  http.get(`/song/url?id=${params.id}`)

// 获取歌曲详细
export const getCurrentSongDetails = (params: IGetIds) =>
  http.get(`/song/detail?ids=${params.ids}`)

export const getSimiSong = (params: IGetIds) => http.get('/simi/song', params)

// 获取歌词
export const getLyric = (params: IGetId) => http.get(`/lyric?id=${params.id}`)
