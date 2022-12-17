import { Link } from 'react-router-dom'
import { memo, useEffect, useState } from 'react'
import Style from './style.module.css'
import { getTopListDetail } from '@/api/recommend'
import type { IPlaylist } from './type'
import { transitionSamllImg } from '@/utils'
import { fetchCurrentSongAction } from '@/store/modules/player/player'
import store from '@/store'

// 榜单id
const listIDArr = [19723756, 3779629, 2884035]

function Main() {
  const [list, setList] = useState<IPlaylist[]>([] as IPlaylist[])

  useEffect(() => {
    const result: any[] = listIDArr.map((id: number) =>
      getTopListDetail({
        id
      })
    )
    Promise.all(result).then((res) => {
      setList(res.map((v: any) => v.playlist))
    })
  }, [])

  function playSong(id: number) {
    store.dispatch(fetchCurrentSongAction({ ids: id }))
  }
  return (
    <>
      {list.length > 0 && (
        <div className={Style['main']}>
          {list.map((v: IPlaylist) => (
            <ul className={Style['list']} key={v.id}>
              <li className={Style['first-li']}>
                <div className={Style['cver']}>
                  <img
                    src={transitionSamllImg(v.coverImgUrl, 100, 100)}
                    alt={v.name}
                    title={v.name}
                  />
                  <Link to="/" title={v.name} className="yxz-coverall"></Link>
                </div>
                <div className={Style['tit']}>
                  <h3>{v.name}</h3>
                  <div className={Style['btn']}>
                    <Link to="/" className="yxz-sprite"></Link>
                    <Link to="/" className="yxz-sprite"></Link>
                  </div>
                </div>
              </li>
              {v.tracks.slice(0, 10).map((item: any, idx: number) => (
                <li key={item.id}>
                  <span>{++idx}</span>
                  <Link
                    to="/"
                    className="f-thide"
                    style={{
                      width: '170px'
                    }}
                  >
                    {item.name}
                  </Link>
                  <div className={Style['oper-box']}>
                    <div className={Style['oper']}>
                      <Link
                        to="#/"
                        className="yxz-sprite"
                        onClick={() => {
                          playSong(item.id)
                        }}
                      >
                        播放
                      </Link>
                      <Link to="#/" className="yxz-icon">
                        添加到播放列表
                      </Link>
                      <Link to="#/" className="yxz-sprite">
                        收藏
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
              <li className={Style['last']}>
                <Link to="/all">查看全部{'>'}</Link>
              </li>
            </ul>
          ))}
        </div>
      )}
    </>
  )
}

export default memo(Main)
