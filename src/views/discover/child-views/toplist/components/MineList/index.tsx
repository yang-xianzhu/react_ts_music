import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Style from './style.module.css'
import { getTopListAll } from '@/api/toplist'
import { ITopList } from './type'
import { transitionSamllImg } from '@/utils'

const MineList: FC = () => {
  const [topList, setTopList] = useState<ITopList[]>([] as ITopList[])
  const [curId, setCurId] = useState<number>()
  const push = useNavigate()

  useEffect(() => {
    getTopListAll().then((res) => {
      setTopList(res.list)
      setCurId(res?.list[0]?.id || 0)
    })
  }, [])

  function handleList(id: number) {
    if (id === curId) return
    push(`/discover/toplist?id=${id}`)
    setCurId(id)
  }

  return (
    <>
      <div className={Style['minelist-container']}>
        <div className={Style['minelist-item']}>
          <h2 className={`f-weight-700 ${Style['title']}`}>云音乐特色榜</h2>
          <ul>
            {topList.length > 0
              ? topList.slice(0, 4).map((v: ITopList) => (
                  <li
                    key={v.id}
                    className={`${Style['mine']} ${
                      v.id === curId ? Style['active'] : ''
                    }`}
                    onClick={() => {
                      handleList(v.id)
                    }}
                  >
                    <img
                      src={transitionSamllImg(v.coverImgUrl, 40, 40)}
                      alt=""
                    />
                    <div className={Style['dec']}>
                      <p className="f-weight-700">{v.name}</p>
                      <span>{v.updateFrequency}</span>
                    </div>
                  </li>
                ))
              : null}
          </ul>
        </div>
        {/* 全球媒体榜 */}
        <div className={Style['minelist-item']}>
          <h2 className={`f-weight-700 ${Style['title']}`}>全球媒体榜</h2>
          <ul>
            {topList.length > 0
              ? topList.slice(4).map((v: ITopList) => (
                  <li
                    key={v.id}
                    className={`${Style['mine']} ${
                      v.id === curId ? Style['active'] : ''
                    }`}
                    onClick={() => {
                      handleList(v.id)
                    }}
                  >
                    <img
                      src={transitionSamllImg(v.coverImgUrl, 40, 40)}
                      alt=""
                    />
                    <div className={Style['dec']}>
                      <p className="f-weight-700 yxz-col-3">{v.name}</p>
                      <span>{v.updateFrequency}</span>
                    </div>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </>
  )
}

export default MineList
