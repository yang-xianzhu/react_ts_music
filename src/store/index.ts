import { configureStore } from '@reduxjs/toolkit'
import recommendReducer from '@/views/discover/child-views/recommend/store'
import playerReducer from './modules/player/player'

const store = configureStore({
  reducer: {
    //   发现音乐-我的推荐
    recommend: recommendReducer,
    // 当前播放的歌曲
    player: playerReducer
  }
})

export default store
