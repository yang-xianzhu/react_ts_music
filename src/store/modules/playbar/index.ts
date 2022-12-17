import { createSlice } from '@reduxjs/toolkit'
import type { IInitialState } from './type'

const initialState: IInitialState = {
  // 是否播放
  isPlay: false,
  // 是否锁定底部bar
  isLock: true
}

const playbarSlice = createSlice({
  name: 'playbar',
  initialState,
  reducers: {
    // 切换当前歌曲是否播放
    changeIsPlay(state, { payload }) {
      state.isPlay = payload
    },
    // 切换是否锁定底部bar
    changeIsLock(state, { payload }) {
      state.isLock = payload
    }
  }
})

export const { changeIsPlay, changeIsLock } = playbarSlice.actions

export default playbarSlice.reducer
