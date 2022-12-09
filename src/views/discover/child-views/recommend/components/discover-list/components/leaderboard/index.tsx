import { memo } from 'react'
import Header from '../header'
import Main from './components/main'
function LeaderBoard() {
  return (
    <>
      <Header title="榜单" />
      <Main />
    </>
  )
}

export default memo(LeaderBoard)
