import { FC, ReactElement } from 'react'

const WithContainer: FC<{ children: ReactElement }> = (props) => {
  return (
    <>
      <div
        style={{
          paddingTop: '100px',
          width: '980px',
          minHeight: '700px',
          margin: ' 0 auto',
          backgroundColor: '#fff',
          border: '1px solid #d3d3d3',
          borderWidth: '0 1px,'
        }}
      >
        {props.children}
      </div>
    </>
  )
}

export default WithContainer
