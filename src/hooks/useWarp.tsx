import indexStyle from '@/assets/styles/index.module.css'
import { ReactElement } from 'react'
import { memo } from 'react'

// 居中高阶组件
function useWarp({ props: { children } }: any) {
  return <div className={indexStyle.warp}>{children}</div>
}

export default useWarp
