import { configureStore } from '@reduxjs/toolkit'
import recommendReducer from '@/views/discover/child-views/recommend/store'
const store = configureStore({
  reducer: {
    //   发现音乐-我的推荐
    recommendReducer
  }
})
export default store
