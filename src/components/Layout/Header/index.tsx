import indexStyle from '@/assets/styles/index.module.css'
import classObj from './index.module.css'
import { useLocation } from 'react-router-dom'
import { memo } from 'react'
import Search from '@/components/Search'
import Login from './Login'
// import  { IList } from './index.d.ts'
type IList = {
  text: string
  href: string
}

const list: IList[] = [
  {
    text: '发现音乐',
    href: '/'
  },
  {
    text: '我的音乐',
    href: '/mine'
  },
  {
    text: '关注',
    href: '/focus'
  },
  {
    text: '商城',
    href: '/mall'
  },
  {
    text: '音乐人',
    href: '/musician'
  },
  {
    text: '下载客户端',
    href: '/download'
  }
]
function Header() {
  const { pathname } = useLocation()
  // 切换菜单
  const handle = (item: IList) => {}
  return (
    <div className={classObj['m-top']}>
      <div className={`${indexStyle.warp} ${classObj.header}`}>
        {/* logo */}
        <h1 className={classObj.logo}>
          <a>网易云音乐</a>
        </h1>
        {/* 菜单选项 */}
        <ul className={classObj.header}>
          {list.map((v: IList) => (
            <li
              onClick={() => {
                handle(v)
              }}
              key={v.text}
              className={`${classObj.item} ${
                pathname === v.href && classObj.current_item
              }`}
            >
              {v.text}
            </li>
          ))}{' '}
        </ul>
        {/* 右半部分 */}
        <div className={classObj['right-box']}>
          {/* 搜索框 */}
          <Search />
          <a className={classObj.creator}>创作者中心</a>
          <Login />
        </div>
      </div>
    </div>
  )
}

export default memo(Header)
