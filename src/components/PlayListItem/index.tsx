import { memo, useEffect, useMemo, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import type { FC } from 'react'
import Style from './style.module.css'
import { getTopPlayList } from '@/api/toplist'
import type { IPlayListTop } from '@/api/toplist'
import type { Playlist } from './type'
import {
  backTopTransiton,
  numberTransition,
  transitionSamllImg,
  transitionUrlParams
} from '@/utils'
import MyPagination from '@/components/MyPagination'

const PlayListItem: FC = () => {
  const push = useNavigate()
  const routeParams = useLocation()

  const curPage = useMemo(() => {
    const curOffset = Number(transitionUrlParams(routeParams.search, 'offset'))
    const curPage = !curOffset ? 1 : curOffset / 35 + 1

    return curPage
  }, [routeParams.search])

  const [currentPage, setCurrentPage] = useState<number>(curPage)
  const [list, setList] = useState([] as Playlist[])
  const [total, setTotal] = useState<number>(0)

  const [params, setParams] = useState({
    offset: 0, // 偏移量
    limit: 35, // 每次请求多少条
    cat: '全部',
    order: 'hot' // 类型
  })

  useEffect(() => {
    // 当cat变化的时候，需要做一些重置操作
    // 重置offset
    setParams(() => ({
      ...params,
      offset: 0
    }))
    // 重置当前页数
    setCurrentPage(1)
  }, [decodeURI(transitionUrlParams(routeParams.search, 'cat') as string)])

  useEffect(() => {
    const cat = transitionUrlParams(routeParams.search, 'cat') || '全部'
    const curOffset =
      Number(transitionUrlParams(routeParams.search, 'offset')) || 0
    const currentCat = decodeURI(cat as string)

    getList({
      ...params,
      offset: curOffset,
      cat: currentCat
    })
  }, [routeParams.search])

  // 获取数据
  function getList(data: IPlayListTop) {
    getTopPlayList(data).then((res) => {
      //   console.log('res', res)
      setList(res?.playlists)

      setTotal(res?.total)
    })
  }

  return (
    <>
      <ul
        className={Style['list']}
        style={{
          marginTop: '30px'
        }}
      >
        {list.length > 0
          ? list.map((item) => (
              <li key={item.id}>
                <div className={Style['cover']}>
                  <span
                    className={`yxz-coverall ${Style['brightness']}`}
                    title={item.name}
                  ></span>
                  <img
                    src={transitionSamllImg(item.coverImgUrl, 140, 140)}
                    alt={item.name}
                  />
                  <div className={`yxz-coverall ${Style['msk']}`}>
                    <i className="yxz-iconall"></i>
                    <span>{numberTransition(item.playCount)}</span>
                    <span className={`yxz-iconall ${Style['play']}`}></span>
                  </div>
                </div>
                <p
                  className={`f-thide underline f-weight-700 ${Style['title']}`}
                >
                  {item.name}
                </p>
                <span className={`f-thide ${Style['dec']}`}>
                  by <i className="underline">{item.creator?.nickname}</i>
                  <img
                    style={{
                      width: '13px',
                      height: '13px',
                      marginLeft: '2px'
                    }}
                    src={transitionSamllImg(
                      item?.creator?.avatarDetail?.identityIconUrl,
                      13,
                      13
                    )}
                    alt=""
                  />
                </span>
              </li>
            ))
          : null}
      </ul>

      <MyPagination
        style={{
          marginTop: '32px',
          display: 'flex',
          justifyContent: 'center'
        }}
        total={total}
        pageSize={35}
        current={curPage}
        onChange={(page, pageSize) => {
          const offset = page === 1 ? 0 : (page - 1) * pageSize

          const curCat = decodeURI(
            (transitionUrlParams(routeParams.search, 'cat') as string) || '全部'
          )

          push(
            `/discover/playlist?order=hot&cat=${curCat}&limit=${pageSize}&offset=${offset}`
          )
          const currentParams = {
            ...params,
            offset
          }
          setParams(currentParams)
          if (page !== currentPage) {
            // 返回顶部
            backTopTransiton({ top: 0 })
            setCurrentPage(page)
          }
        }}
      />
    </>
  )
}

export default memo(PlayListItem)
