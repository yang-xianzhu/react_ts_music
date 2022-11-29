import styleObj from './style.module.css'
import type { IList } from './type'
const List: IList[] = [
  {
    text: '推荐',
    href: ''
  },
  {
    text: '排行榜',
    href: '/discover/toplist'
  },
  {
    text: '歌单',
    href: 'discover/playlist'
  },
  {
    text: '主播电台',
    href: 'discover/djradio'
  },
  {
    text: '歌手',
    href: 'discover/artist'
  },
  {
    text: '新碟上架',
    href: '/discover/album'
  }
]
const Subnav = () => {
  return (
    <>
      <ul className={styleObj.nav}>
        {List.map((v: IList) => (
          <li key={v.text}>
            <span>{v.text}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Subnav
