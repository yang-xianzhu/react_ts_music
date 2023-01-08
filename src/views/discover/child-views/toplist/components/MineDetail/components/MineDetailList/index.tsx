import type { FC } from 'react'
import type { Track as ITrack } from '../MineDetailHeader/type'
import Style from './style.module.css'
import { transitionSamllImg, transitionTimer } from '@/utils'
import { fetchCurrentSongAction } from '@/store/modules/player/player'
import store from '@/store'
interface IProps {
  list: ITrack[]
  playCount: number
}

const MineDetailList: FC<IProps> = ({ list = [], playCount }) => {
  // console.log(props.list)

  function playSong(id: number) {
    store.dispatch(fetchCurrentSongAction({ ids: id }))
  }

  return (
    <>
      <header className={Style['header']}>
        <div className={Style['head-left']}>
          <h1>歌曲列表</h1>
          <span style={{ color: '#666' }}>{list.length}首歌</span>
        </div>
        <div>
          <span>播放:</span>
          <strong className={`${Style['play-num']}`}>{playCount}</strong>
          <em>次</em>
        </div>
      </header>
      {/* 表格 */}
      <div className={Style['table']}>
        <div className={Style['table-head']}>
          <div className={`${Style['index']}`}>序号</div>
          <div className={`border-left ${Style['title']}`}>标题</div>
          <div className={`border-left ${Style['time']}`}>时长</div>
          <div className={`border-left ${Style['songer']}`}>歌手</div>
        </div>
        <div className={Style['table-body']}>
          {list.length > 0
            ? list.slice(0, 3).map((v, idx: number) => (
                <div
                  className={Style['top-list']}
                  style={{
                    background: idx + 1 === 2 ? '#fff' : '#f7f7f7'
                  }}
                  key={v.id}
                >
                  <div className={`${Style['index']}`}>
                    <em>{idx + 1}</em>
                    <span className={`yxz-icon ${Style['icon']}`}></span>
                  </div>
                  <div className={`${Style['title']}`}>
                    <img
                      src={
                        transitionSamllImg(v.al.picUrl, 50, 50) + '&quality=100'
                      }
                      alt={v.al.name}
                    />
                    <i
                      className="yxz-table"
                      onClick={() => {
                        playSong(v.id)
                      }}
                    ></i>
                    <span
                      className="underline f-thide"
                      style={{
                        maxWidth: '109px'
                      }}
                    >
                      {v.name}
                    </span>
                    {v?.alia.length > 0 ? (
                      <span className={`f-thide ${Style['dec']}`}>
                        ~{v?.alia}
                      </span>
                    ) : null}
                  </div>
                  <div className={`${Style['time']}`}>
                    {transitionTimer(v.dt)}
                  </div>
                  <div className={`${Style['songer']}`}>
                    {v?.ar?.map((arItem, index: number) => (
                      <span key={arItem.id} className="underline">
                        {arItem.name}
                        {index !== v?.ar?.length - 1 && '/'}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            : null}

          {/* 第三名以下 */}
          {list.slice(3).map((v, idx: number) => (
            <div
              className={Style['top-list']}
              style={{
                lineHeight: '30px',
                height: '30px',
                background: idx % 2 === 0 ? '#fff' : ''
              }}
              key={v.id}
            >
              <div className={`${Style['index']}`}>
                <em>{idx + 4}</em>
                <span className={`yxz-icon ${Style['icon']}`}></span>
              </div>
              <div className={`${Style['title']}`}>
                <i className="yxz-table" onClick={() => playSong(v.id)}></i>
                <span
                  className="underline f-thide"
                  style={{
                    maxWidth: '109px'
                  }}
                >
                  {v.name}
                </span>
                {v?.alia.length > 0 ? (
                  <span className={`f-thide ${Style['dec']}`}>~{v?.alia}</span>
                ) : null}
              </div>
              <div className={`${Style['time']}`}>{transitionTimer(v.dt)}</div>
              <div className={`f-thide ${Style['songer']}`}>
                {v?.ar?.map((arItem, index: number) => (
                  <span key={index} className="underline">
                    {arItem.name}
                    {index !== v?.ar?.length - 1 && '/'}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MineDetailList
