import WithLayoutWrap from '../hooks/WithLayoutWrap'
import MineList from './components/MineList'
import MineDetail from './components/MineDetail'

const TopList = () => {
  return (
    <>
      <WithLayoutWrap>
        <div
          style={{
            display: 'flex'
          }}
        >
          <MineList />
          <MineDetail />
        </div>
      </WithLayoutWrap>
    </>
  )
}

export default TopList
