import { FC } from 'react'
import WithLayoutWrap from '../hooks/WithLayoutWrap'
import FilterList from './components/FilterList'
import MainList from './components/MainList'

const Artist: FC = () => {
  return (
    <WithLayoutWrap>
      <div
        style={{
          display: 'flex'
        }}
      >
        <FilterList />
        <MainList />
      </div>
    </WithLayoutWrap>
  )
}

export default Artist
