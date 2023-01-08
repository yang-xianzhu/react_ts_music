import { FC } from 'react'
import WithLayoutWrap from '../hooks/WithLayoutWrap'
import FilterList from './components/FilterList'

const Artist: FC = () => {
  return (
    <WithLayoutWrap>
      <div
        style={{
          display: 'flex'
        }}
      >
        <FilterList />
      </div>
    </WithLayoutWrap>
  )
}

export default Artist
