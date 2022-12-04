import { createSlice } from '@reduxjs/toolkit'
import { TBanner } from './type'

interface IRecommendState {
  banners: TBanner[]
}

const initialState: IRecommendState = {
  banners: []
}

const recommendState = createSlice({
  name: 'recommend',
  initialState,
  reducers: {}
})

export default recommendState.reducer
