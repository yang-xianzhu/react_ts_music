import WithContainer from '@/hooks/WithContainer'
import { memo } from 'react'
import Style from './style.module.css'

const Focus = () => {
  return (
    <>
      <div style={{ backgroundColor: '#C20C0C', height: '5px' }}></div>
      <WithContainer>
        <div className={Style['pglg']}></div>
      </WithContainer>
    </>
  )
}

export default memo(Focus)
