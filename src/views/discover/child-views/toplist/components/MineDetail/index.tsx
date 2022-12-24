import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Style from './style.module.css'
import MineDetailHeader from './components/MineDetailHeader'
import MineDetailList from './components/MineDetailList'
import { transitionUrlParams } from '@/utils'
import { getTopListDetail } from '@/api/toplist'
import type { IPlaylistObj } from './components/MineDetailHeader/type'

const MineDetail: FC = () => {
  const { search } = useLocation()
  const [data, setData] = useState({} as IPlaylistObj)

  useEffect(() => {
    const id = transitionUrlParams(search, 'id')
    if (id) {
      getTopListDetail(Number(id)).then((res) => {
        // console.log('res', res.playlist)
        setData(res?.playlist || {})
      })
    }
  }, [search])

  return (
    <>
      <div className={Style['contanier']}>
        {/* 头部 */}
        <MineDetailHeader info={data} />
        {/* 榜单详情列表 */}
        <MineDetailList list={data.tracks} playCount={data.playCount} />
      </div>
    </>
  )
}

export default MineDetail
