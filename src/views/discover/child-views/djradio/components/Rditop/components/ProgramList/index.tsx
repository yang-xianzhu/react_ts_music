import { FC, memo, useEffect, useState } from 'react'
import Style from './style.module.css'
import { transitionSamllImg, zeroFilling } from '@/utils'
import { getDjProgramToplist } from '@/api/djCatelist'
import type { IProgram } from './type'
import store from '@/store'
import { fetchCurrentSongAction } from '@/store/modules/player/player'

const ProgramList: FC = () => {
  const [list, setList] = useState([] as IProgram[])
  function getData() {
    getDjProgramToplist({ limit: 10 }).then((res) => {
      setList(res?.toplist || [])
    })
  }

  function play(id: number) {
    store.dispatch(fetchCurrentSongAction({ ids: id }))
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <ul className={Style['list']}>
        {list.length > 0
          ? list.map((v, idx: number) => (
              <li key={v.program.id}>
                <div className={Style['rank']}>
                  <em
                    style={{
                      color: idx + 1 <= 3 ? '#da4545' : '',
                      fontWeight: idx + 1 <= 3 ? '700' : 'normal'
                    }}
                  >
                    {zeroFilling(idx + 1)}
                  </em>
                  <span className={Style['rnk']}>
                    <i className={`${Style['icon']}`}></i>1
                  </span>
                </div>
                <div className={Style['img-box']}>
                  <i
                    title="播放"
                    className={`yxz-iconall ${Style['play']}`}
                    onClick={() => play(v.program.mainSong.id)}
                  >
                    播放
                  </i>
                  <img
                    src={transitionSamllImg(v.program.coverUrl, 40, 40)}
                    alt={v.program.name}
                  />
                </div>
                <div className={Style['cnt']}>
                  <p
                    title={v.program.name}
                    className={`f-thide underline ${Style['text']}`}
                  >
                    {v.program.name}
                  </p>
                  <span
                    title={v.program.radio.name}
                    className={`f-thide underline ${Style['dec']}`}
                  >
                    {v.program.radio.name}
                  </span>
                </div>
                <div className={`yxz-table ${Style['progress']}`}>
                  {/* 当前进度 */}
                  <i
                    className="yxz-table"
                    style={{
                      width: `${v.score / 1000 > 100 ? 100 : v.score / 1000}%`
                    }}
                  >
                    <i
                      className="yxz-table"
                      style={{
                        width: '95%',
                        backgroundPosition: '0 -304px'
                      }}
                    ></i>
                  </i>
                </div>
              </li>
            ))
          : null}
      </ul>
    </>
  )
}

export default memo(ProgramList)
