import { FC, useEffect, useState } from 'react'
import WithLayoutWrap from '../../../hooks/WithLayoutWrap'
import Style from './style.module.css'
import { zeroFilling, transitionSamllImg } from '@/utils'
import { formatTime } from '@/utils/format'
import { getDjProgramToplist } from '@/api/djCatelist'
import type { IProgram } from './type'
import store from '@/store'
import { fetchCurrentSongAction } from '@/store/modules/player/player'

const Rank: FC = () => {
  const [list, setList] = useState([] as IProgram[])
  const [updateTime, setUpdateTime] = useState<number>(0)

  function getData() {
    getDjProgramToplist({ limit: 100 }).then((res) => {
      setList(res?.toplist || [])
      setUpdateTime(res?.updateTime || 0)
    })
  }

  function play(id: number) {
    store.dispatch(fetchCurrentSongAction({ ids: id }))
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <WithLayoutWrap>
      <div style={{ padding: '40px' }}>
        <header className={Style['header']}>
          <h2>节目排行榜</h2>
          <em>最近更新：{formatTime(updateTime)}</em>
          <div className={`yxz-icon2 ${Style['info']}`}>
            <div className={`yxz-tip ${Style['tip']}`}>
              选取云音乐中7天内发布的热度最高的节目，每天更新。热度由节目播放、赞、分享数量总和计算。
            </div>
          </div>
        </header>
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
                  <div
                    title={v.program.name}
                    className={`f-thide underline ${Style['cnt']}`}
                  >
                    {v.program.name}
                  </div>
                  <div
                    title={v.program.radio.name}
                    className={`f-thide underline ${Style['artist']}`}
                  >
                    {v.program.radio.name}
                  </div>
                  <div
                    className={`f-thide ${Style['tag']}`}
                    title={v.program.radio.category}
                  >
                    {v.program.radio.category}
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
      </div>
    </WithLayoutWrap>
  )
}

export default Rank
