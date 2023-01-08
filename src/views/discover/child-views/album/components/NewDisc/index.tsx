import { FC, memo, useEffect, useState, Fragment } from 'react'
import HeadTitle from '@/components/HeadTitle'
import { getAlbumHotList } from '@/api/newAlbum'
import type { IList } from '../List/type'
import List from '../List'

const NewDisc: FC = () => {
  const [list, setList] = useState<IList[]>([])
  function getData() {
    getAlbumHotList().then((res) => {
      setList(res?.albums.slice(0, 10) || [])
    })
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <HeadTitle title="热门新碟" isShowAll={false} />
      <List list={list} />
    </>
  )
}

export default memo(NewDisc)
