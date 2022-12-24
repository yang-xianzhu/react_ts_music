import { FC, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Style from './style.module.css'
import { getTopListAll } from '@/api/toplist'
import { ITopList } from './type'
import { transitionSamllImg, transitionUrlParams } from '@/utils'

const MineList: FC = () => {
  const [topList, setTopList] = useState<ITopList[]>([] as ITopList[])
  const push = useNavigate()
  const search = useLocation().search
  const [paramsId, setParamsId] = useState<number>(
    Number(transitionUrlParams(search as unknown as string, 'id') || 0)
  )

  useEffect(() => {
    getTopListAll().then((res) => {
      setTopList(res.list)

      if (paramsId) return
      push(`/discover/toplist?id=${res?.list[0]?.id}`)
      setParamsId(res?.list[0]?.id)
    })
  }, [])

  function handleList(id: number) {
    if (id === paramsId) return
    push(`/discover/toplist?id=${id}`)
    setParamsId(id)
  }

  return (
    <>
      <div className={Style['minelist-container']}>
        <div className={Style['minelist-item']}>
          <h2 className={`f-weight-700 ${Style['title']}`}>云音乐特色榜</h2>
          <ul>
            {topList.length > 0
              ? topList.slice(0, 4).map((v: ITopList, idx: number) => (
                  <li
                    key={v.id}
                    className={`${Style['mine']} ${
                      v.id === paramsId ? Style['active'] : ''
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
                      v.id === paramsId ? Style['active'] : ''
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
