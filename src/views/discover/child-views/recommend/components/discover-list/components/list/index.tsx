import { memo } from 'react'
import Header from '../../components/header'
import ListMain from './components/main'

const itemInfo = {
  title: '热门推荐',
  infos: [
    {
      text: '华语',
      href: ''
    },
    {
      text: '流行',
      href: ''
    },
    {
      text: '摇滚',
      href: ''
    },
    {
      text: '民谣',
      href: ''
    },
    {
      text: '电子',
      href: ''
    }
  ]
}
function List() {
  return (
    <>
      {/* head部分 */}
      <Header {...itemInfo} />
      <ListMain />
    </>
  )
}

export default memo(List)
