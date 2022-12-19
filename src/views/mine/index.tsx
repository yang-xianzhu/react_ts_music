import { memo } from 'react'
import Style from './style.module.css'
import WithContainer from '@/hooks/WithContainer'
function Mine() {
  return (
    <>
      <WithContainer>
        <div className={Style['pglg']}>
          <h2>登录网易云音乐</h2>
          <a href="#">立即登录</a>
        </div>
      </WithContainer>
    </>
  )
}
export default memo(Mine)
