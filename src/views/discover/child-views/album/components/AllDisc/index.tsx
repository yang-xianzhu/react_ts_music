import { FC, memo, useEffect, useMemo, useState } from 'react'
import HandleHead from '@/components/HandleHead'
import { useNavigate, useLocation } from 'react-router-dom'
import List from '../List'
import { transitionUrlParams, backTopTransiton } from '@/utils'
import { getAllAlbumList } from '@/api/newAlbum'
import MyPagination from '@/components/MyPagination'

// /discover/album
const handleList = [
  {
    text: '全部',
    value: 'ALL'
  },
  {
    text: '华语',
    value: 'ZH'
  },
  {
    text: '欧美',
    value: 'EA'
  },
  {
    text: '韩国',
    value: 'KR'
  },
  {
    text: '日本',
    value: 'JP'
  }
]

const AllDisc: FC = () => {
  const push = useNavigate()
  const search = useLocation().search
  // 列表
  const [list, setList] = useState([])
  // 总条数
  const [total, seTotal] = useState<number>(0)
  // 当前的类型
  const currentArea = useMemo<string>(
    () => (transitionUrlParams(search, 'area') as string) || 'ALL',
    [search]
  )
  // 当前的页数
  const currentPage = useMemo<number>(
    () => Number(transitionUrlParams(search, 'index') || 1),
    [search]
  )

  function getData() {
    getAllAlbumList({
      area: currentArea,
      offset: (currentPage - 1) * 35,
      limit: 35
    }).then((res) => {
      seTotal(res?.total || 0)
      setList(res?.albums || [])
    })
  }

  useEffect(() => {
    getData()
  }, [currentPage, currentArea])

  return (
    <>
      <HandleHead
        title="全部新碟"
        list={handleList}
        handleItem={(item) => {
          push(`/discover/album?area=${item.value}&index=1`)
        }}
        currentItem={currentArea as string}
      />
      <List list={list} />
      <MyPagination
        style={{
          marginTop: '32px',
          display: 'flex',
          justifyContent: 'center'
        }}
        current={currentPage}
        pageSize={35}
        total={total}
        onChange={(page) => {
          backTopTransiton({ top: 590 })
          push(`/discover/album?area=${currentArea}&index=${page}`)
        }}
      />
    </>
  )
}

export default memo(AllDisc)
