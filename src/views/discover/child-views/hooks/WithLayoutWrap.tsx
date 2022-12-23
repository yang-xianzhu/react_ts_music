import type { FC, ReactElement } from 'react'

const WithLayoutWrap: FC<{ children: ReactElement }> = (props) => {
  return (
    <>
      <div
        style={{
          background: '#f5f5f5'
        }}
      >
        <div
          style={{
            width: '982px',
            margin: ' 0 auto',
            backgroundColor: '#fff'
          }}
        >
          {props.children}
        </div>
      </div>
    </>
  )
}
export default WithLayoutWrap
