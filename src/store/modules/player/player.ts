import { getCurrentSongDetails } from '@/api/player'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { IPlayer } from './type'
import { getLyric } from '@/api/player'
interface IPlayState {
  currentSong: IPlayer
}

export const fetchCurrentSongAction = createAsyncThunk(
  'currentSong',
  (params: { ids: number }, { dispatch }) => {
    getCurrentSongDetails(params).then((res: any) => {
      if (!res.songs.length) return
      const song = res.songs[0]
      dispatch(changeCurrntSongAction(song))
    })
    getLyric({
      id: params.ids
    }).then((res) => {
      console.log('获取歌词了', res)
    })
  }
)

const initialState: IPlayState = {
  currentSong: {
    name: '必殺技 Live',
    id: 1876100097,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 28072916,
        name: '老虎歌皇',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '',
    fee: 0,
    v: 2,
    crbt: null,
    cf: '',
    al: {
      id: 96913959,
      name: '老虎歌皇「直播錄音二」',
      picUrl:
        'https://p2.music.126.net/1xA5BpihPRe9wk24KukDTw==/109951165397339845.jpg',
      tns: [],
      pic_str: '109951165397339845',
      pic: 109951165397339840
    },
    dt: 217392,
    h: {
      br: 320000,
      fid: 0,
      size: 8697645,
      vd: -37999,
      sr: 48000
    },
    m: {
      br: 192000,
      fid: 0,
      size: 5218605,
      vd: -35406,
      sr: 48000
    },
    l: {
      br: 128000,
      fid: 0,
      size: 3479085,
      vd: -33734,
      sr: 48000
    },
    sq: null,
    hr: null,
    a: null,
    cd: '01',
    no: 1,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 128,
    originCoverType: 2,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 2,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mv: 0,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 0,
    publishTime: 0
  }
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    // 切换当前歌曲
    changeCurrntSongAction(state, { payload }) {
      state.currentSong = payload
    }
  }
})

export const { changeCurrntSongAction } = playerSlice.actions

export default playerSlice.reducer
