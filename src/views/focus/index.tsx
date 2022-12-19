import WithContainer from '@/hooks/WithContainer'
import { memo } from 'react'
import Style from './style.module.css'

const Focus = () => {
  return (
    <>
      <WithContainer>
        <div className={Style['pglg']}></div>
      </WithContainer>
    </>
  )
}

export default memo(Focus)
