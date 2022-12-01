import { useLocation, useNavigate } from 'react-router-dom'
import styleObj from './style.module.css'
import type { IList } from './subnav.type'
const List: IList[] = [
  {
    text: '推荐',
    href: '/discover/recomment'
  },
  {
    text: '排行榜',
    href: '/discover/toplist'
  },
  {
    text: '歌单',
    href: '/discover/playlist'
  },
  {
    text: '主播电台',
    href: '/discover/djradio'
  },
  {
    text: '歌手',
    href: '/discover/artist'
  },
  {
    text: '新碟上架',
    href: '/discover/album'
  }
]
const Subnav = () => {
  const { pathname } = useLocation()
  const push = useNavigate()
  const changeTwoRoute = (v: IList) => {
    push(v.href)
  }
  return (
    <>
      <ul className={styleObj.nav}>
        {List.map((v: IList, index: number) => (
          <li key={v.text} onClick={() => changeTwoRoute(v)}>
            <span
              className={`${
                pathname === List[index].href && styleObj['current-item']
              }`}
            >
              {v.text}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Subnav
