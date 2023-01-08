import { FC } from 'react'
import WithLayoutWrap from '../hooks/WithLayoutWrap'
import NewDisc from './components/NewDisc'
import AllDisc from './components/AllDisc'
const Album: FC = () => {
  return (
    <WithLayoutWrap>
      <div
        style={{
          padding: '40px'
        }}
      >
        {/* 热门新碟 */}
        <NewDisc />
        {/* 全部新碟 */}
        <AllDisc />
      </div>
    </WithLayoutWrap>
  )
}

export default Album
