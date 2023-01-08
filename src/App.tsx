import Layout from '@/views/layout'
import { Provider } from 'react-redux'
import store from '@/store'
import { useEffect } from 'react'
import { fetchCurrentSongAction } from '@/store/modules/player/player'

function App() {
  // 获取当前歌曲信息
  useEffect(() => {
    store.dispatch(fetchCurrentSongAction({ ids: 513360721 }))
  }, [])

  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  )
}

export default App
