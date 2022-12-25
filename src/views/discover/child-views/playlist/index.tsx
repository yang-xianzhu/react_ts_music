import type { FC } from 'react'
import WithLayoutWrap from '../hooks/WithLayoutWrap'
import PlayListScree from '@/components/PlayListScree'
import PlayListItem from '@/components/PlayListItem'

const PlayList: FC = () => {
  return (
    <>
      <WithLayoutWrap>
        <div
          className="border-left border-right"
          style={{
            padding: '40px'
          }}
        >
          {/* head */}
          <PlayListScree />
          {/* list */}
          <PlayListItem />
        </div>
      </WithLayoutWrap>
    </>
  )
}

export default PlayList
