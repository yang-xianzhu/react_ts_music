import { configureStore } from '@reduxjs/toolkit'
import recommendReducer from '@/views/discover/child-views/recommend/store'
import playerReducer from './modules/player/player'
import playbarReducer from './modules/playbar'

const store = configureStore({
  reducer: {
    //   发现音乐-我的推荐
    recommend: recommendReducer,
    // 当前播放的歌曲
    player: playerReducer,
    // 歌曲播放状态
    playbar: playbarReducer
  }
})

export default store
