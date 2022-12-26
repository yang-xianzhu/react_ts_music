import type { FC } from 'react'
import WithLayoutWrap from '../hooks/WithLayoutWrap'
import CateList from './components/CateList'

const Djradio: FC = () => {
  return (
    <>
      <WithLayoutWrap>
        <div
          className="border-left border-right"
          style={{
            padding: '40px'
          }}
        >
          <CateList />
        </div>
      </WithLayoutWrap>
    </>
  )
}

export default Djradio
