import type { FC } from 'react'
import { memo } from 'react'

interface IProps {
  title: string
  onClick?: () => void
}
const HeadTitle: FC<IProps> = (props) => {
  const { title, onClick = () => {} } = props
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '40px',
          borderBottom: '2px solid var(--theme-color)'
        }}
      >
        <h3
          className="underline"
          style={{
            fontSize: '24px',
            fontWeight: 'normal'
          }}
        >
          {title}
        </h3>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '12px'
          }}
          onClick={onClick}
        >
          <em className="underline">更多</em>
          <i
            style={{
              margin: '-2px 0 0 3px'
            }}
          >
            {' >'}
          </i>
        </div>
      </div>
    </>
  )
}

export default memo(HeadTitle)
