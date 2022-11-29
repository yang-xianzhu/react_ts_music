import indexStyle from '@/assets/styles/index.module.css'
import { FC, ReactNode } from 'react'

interface IProps {
  props: {
    children?: ReactNode
  }
}

// 居中-高阶组件
const useWarp: FC<IProps> = ({ props: { children } }) => {
  return <div className={indexStyle.warp}>{children}</div>
}

export default useWarp
