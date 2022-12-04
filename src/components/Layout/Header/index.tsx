import indexStyle from '@/styles/index.module.css'
import classObj from './index.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { memo } from 'react'
import Search from '@/components/Search'
import Login from './Login/Login'
import type { IList } from './index.d'

const list: IList[] = [
  {
    text: '发现音乐',
    href: '/discover'
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
    href: '/mall',
    completeHref: 'https://music.163.com/store/product'
  },
  {
    text: '音乐人',
    href: '/musician',
    completeHref: 'https://music.163.com/st/musician'
  },
  {
    text: '下载客户端',
    href: '/download'
  }
]
function Header() {
  const { pathname } = useLocation()
  const push = useNavigate()
  // 切换菜单
  const handle = (item: IList) => {
    push(item.href)
  }
  return (
    <>
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
                  pathname.includes(v.href) && classObj.current_item
                } ${v.text === '下载客户端' && classObj['last-item']}`}
              >
                {v.text}
                {v.text === '下载客户端' && (
                  <span className={classObj.hot}></span>
                )}
              </li>
            ))}
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
    </>
  )
}

export default memo(Header)
