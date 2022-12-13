import http from '.'

interface IGetId {
  id: number
}

// 根据id获取音乐url
export const getCurrentSongUrl = (params: IGetId) =>
  http.get(`/song/url?id=${params.id}`)

// 获取歌曲详细
export const getCurrentSongDetails = (params: IGetId) =>
  http.get('/song/detail', params)

export const getSimiSong = (params: IGetId) => http.get('/simi/song', params)

// 获取歌词
export const getLyric = (params: IGetId) => http.get<IGetId>('/lyric', params)
