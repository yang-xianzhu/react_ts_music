import { memo } from 'react'
import Header from '../../components/header'
import ListMain from './components/main'
import { useNavigate } from 'react-router-dom'

function List() {
  const push = useNavigate()

  const itemInfo = {
    title: '热门推荐',
    onClick: (item: { text: string; href: string }) => {
      push(item.href)
    },
    infos: [
      {
        text: '华语',
        href: '/discover/playlist?order=hot&cat=华语&limit=35&offset=0'
      },
      {
        text: '流行',
        href: '/discover/playlist?order=hot&cat=流行&limit=35&offset=0'
      },
      {
        text: '摇滚',
        href: '/discover/playlist?order=hot&cat=摇滚&limit=35&offset=0'
      },
      {
        text: '民谣',
        href: '/discover/playlist?order=hot&cat=民谣&limit=35&offset=0'
      },
      {
        text: '电子',
        href: '/discover/playlist?order=hot&cat=电子&limit=35&offset=0'
      }
    ]
  }
  return (
    <>
      {/* head部分 */}
      <Header {...itemInfo} />
      <ListMain />
    </>
  )
}

export default memo(List)
