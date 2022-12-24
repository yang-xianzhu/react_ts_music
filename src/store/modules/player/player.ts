import { getCurrentSongDetails } from '@/api/player'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { IPlayer } from './type'
import { getLyric } from '@/api/player'
import { ILyricArr, parseLyric } from '@/utils'
import { changeIsPlay } from '@/store/modules/playbar'

interface IPlayState {
  // 当前播放的歌曲
  currentSong: IPlayer
  // 歌曲的歌词
  lyrics: ILyricArr[]
  // 当前播放的歌词
  lyricsIdx: number
  // 播放的歌曲列表
  playSongList: IPlayer[]
  // 当前播放的歌曲列表的歌曲索引
  playSongIndex: number
  playMode: number // 1.单曲循环 2.循环 3.随机
}

interface IChangePlaySongList {
  payload: {
    type: 'add' | 'delete'
    data: IPlayer
  }
}

export const fetchCurrentSongAction = createAsyncThunk(
  'currentSong',
  (params: { ids: number }, { dispatch, getState }) => {
    // 1.获取歌曲
    // 获取歌曲前先判断歌曲列表有没有该歌曲，有则直接在列表取，没有则调用接口
    const list = (getState() as any)!.player.playSongList

    const finIndex = list.findIndex((item: IPlayer) => item.id === params.ids)

    if (finIndex === -1) {
      // 进入这里证明歌曲列表里没有当前播放的这首歌，调接口获取
      getCurrentSongDetails(params).then((res: any) => {
        if (!res.songs.length) return
        const song = res.songs[0]
        dispatch(changeCurrntSongAction(song))
        // 歌曲列表里没有当前这首歌时,新增到歌曲列表里
        dispatch(
          changePlaySongList({
            type: 'add',
            data: song
          })
        )
        // 更新当前当前音乐的索引
        dispatch(changCurrentSongIdx(0))
      })
    } else {
      console.log('读取歌曲列表里的')
      dispatch(changeCurrntSongAction(list[finIndex]))
      // 记录当前播放列表的歌曲索引
      dispatch(changCurrentSongIdx(finIndex))
    }
    // 更新播放状态
    dispatch(changeIsPlay(true))
    // 获取歌词
    getLyric({
      id: params.ids
    }).then((res) => {
      const arr = parseLyric(res?.lrc?.lyric)
      dispatch(changeCurrentLyrics(arr))
    })
  }
)

export const changeMusicAction = createAsyncThunk<void, boolean>(
  'changeMusic',
  (type, { dispatch, getState }) => {
    // 获取当前播放模式
    const { playMode, playSongIndex, playSongList } = (getState() as any).player

    let newIndex: number = 0
    switch (playMode) {
      case 3:
        // 随机
        newIndex = Math.floor(Math.random() * playSongList.length)
        break
      case 1:
      // 单曲循环

      case 2:
        // 循环
        if (type) {
          newIndex =
            playSongIndex + 1 >= playSongList.length ? 0 : playSongIndex + 1
        } else {
          newIndex =
            playSongIndex - 1 < 0 ? playSongList.length - 1 : playSongIndex - 1
        }
    }
    dispatch(changCurrentSongIdx(newIndex))
    // 每次切换自动播放
    dispatch(changeIsPlay(true))
    // 切换歌词

    getLyric({
      id: playSongList[newIndex].id
    }).then((res) => {
      const arr = parseLyric(res?.lrc?.lyric)
      dispatch(changeCurrentLyrics(arr))
    })
  }
)

const initialState: IPlayState = {
  // 当前播放的歌曲
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
  },
  // 歌词数组
  lyrics: [],
  // 当前播放中的歌词
  lyricsIdx: -1,
  playSongList: [
    {
      name: '有何不可',
      id: 167876,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: '许嵩',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000007916021',
      fee: 8,
      v: 67,
      crbt: null,
      cf: '',
      al: {
        id: 16953,
        name: '自定义',
        picUrl:
          'https://p1.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg',
        tns: [],
        pic_str: '109951166118671647',
        pic: 109951166118671650
      },
      dt: 241840,
      h: {
        br: 320000,
        fid: 0,
        size: 9675799,
        vd: -58025,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5805497,
        vd: -55432,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3870346,
        vd: -53760,
        sr: 44100
      },
      sq: {
        br: 941672,
        fid: 0,
        size: 28466869,
        vd: -58130,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 3,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 8192,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 67,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 22036,
      mv: 0,
      publishTime: 1231516800000
    },
    {
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
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      mv: 0,
      publishTime: 0
    },
    {
      name: '哪里都是你',
      id: 488249475,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 1143033,
          name: '队长',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 8,
      v: 36,
      crbt: null,
      cf: '',
      al: {
        id: 35702116,
        name: '哪里都是你',
        picUrl:
          'https://p1.music.126.net/lnOnBbP_H-052Hv5ls-QjA==/109951162964628408.jpg',
        tns: [],
        pic_str: '109951162964628408',
        pic: 109951162964628420
      },
      dt: 222683,
      h: {
        br: 320000,
        fid: 0,
        size: 8909889,
        vd: -52684,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5345951,
        vd: -50078,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3563982,
        vd: -48396,
        sr: 44100
      },
      sq: {
        br: 1603566,
        fid: 0,
        size: 44635936,
        vd: -52683,
        sr: 44100
      },
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
      mark: 64,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 36,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mst: 9,
      cp: 0,
      rtype: 0,
      rurl: null,
      mv: 14477247,
      publishTime: 1499076297913
    }
  ],
  // 当前播放的歌曲列表的歌曲
  playSongIndex: -1,
  // 播放模式
  playMode: 1 // 1.单曲循环 2.循环 3.随机
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    // 切换当前歌曲
    changeCurrntSongAction(state, { payload }) {
      state.currentSong = payload
    },
    // 切换当前歌曲的歌词数组
    changeCurrentLyrics(state, { payload }) {
      state.lyrics = payload
    },
    // 切换当前歌曲的播放中的歌词
    changeCurrentLyricsIdx(state, { payload }) {
      state.lyricsIdx = payload
    },
    // 切换歌曲列表
    changePlaySongList(state, { payload }: IChangePlaySongList) {
      switch (payload.type) {
        case 'add':
          // 头部新增
          state.playSongList = [...state.playSongList, payload.data]
          break
        case 'delete':
          break
      }
    },
    // 切换歌曲列表当前播放的歌曲的索引
    changCurrentSongIdx(state, { payload }) {
      state.playSongIndex = payload
      // 设置当前播放的歌曲
      state.currentSong = state.playSongList[payload]
    },
    // 切换播放模式
    changePlayMode(state, { payload }) {
      state.playMode = payload
    }
  }
})

export const {
  changeCurrntSongAction,
  changeCurrentLyrics,
  changeCurrentLyricsIdx,
  changCurrentSongIdx,
  changePlaySongList,
  changePlayMode
} = playerSlice.actions

export default playerSlice.reducer
