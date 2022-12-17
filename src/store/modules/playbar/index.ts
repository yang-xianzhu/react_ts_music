import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { IInitialState } from './type'

const initialState: IInitialState = {
  // 是否播放
  isPlay: false
}

const playbarSlice = createSlice({
  name: 'playbar',
  initialState,
  reducers: {
    //   切换当前歌曲是否播放
    changeIsPlay(state, { payload }) {
      state.isPlay = payload
    }
  }
})

export const { changeIsPlay } = playbarSlice.actions

export default playbarSlice.reducer
