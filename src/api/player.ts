import request from '.'

interface IGetId {
  id: number
}

// 根据id获取音乐url
export const getCurrentSongUrl = (params: IGetId) =>
  request({
    method: 'get',
    url: '/api/song/url',
    params
  })

// 获取歌曲详细
export const getCurrentSongDetails = (params: IGetId) =>
  request({
    method: 'get',
    url: '/api/song/detail',
    params
  })

export function getSimiSong(params: IGetId) {
  return request({
    url: '/api/simi/song',
    params
  })
}

// 获取歌词
export function getLyric(params: IGetId) {
  return request({
    url: '/api/lyric',
    params
  })
}
