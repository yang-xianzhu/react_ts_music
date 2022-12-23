import WithLayoutWrap from '../hooks/WithLayoutWrap'
import MineList from './components/MineList'

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
          <div>right </div>
        </div>
      </WithLayoutWrap>
    </>
  )
}

export default TopList
