import { FC, useEffect, useState } from 'react'
import Style from './style.module.css'
import WithLayoutWrap from '../../../hooks/WithLayoutWrap'
import { getProgramRecommend } from '@/api/djCatelist'
import { transitionSamllImg } from '@/utils'
import type { IList } from './type'
import store from '@/store'
import { fetchCurrentSongAction } from '@/store/modules/player/player'

const Recommend: FC = () => {
  const [list, setList] = useState([] as IList[])

  function getData() {
    getProgramRecommend({
      limit: 100
    }).then((res) => {
      setList(res?.programs || [])
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
      <WithLayoutWrap>
        <div style={{ padding: '40px' }}>
          <header className={Style['header']}>
            <h2>推荐节目</h2>
            <em>（每日更新）</em>
          </header>
          <ul className={Style['list']}>
            {list.length > 0
              ? list.map((v) => (
                  <li key={v.id}>
                    <div className={Style['img-box']}>
                      <i
                        title="播放"
                        className={`yxz-iconall ${Style['play']}`}
                        onClick={() => {
                          play(v.mainSong.id)
                        }}
                      >
                        播放
                      </i>
                      <img
                        src={transitionSamllImg(
                          v.radio.intervenePicUrl,
                          40,
                          40
                        )}
                        alt={v.name}
                      />
                    </div>
                    <p
                      title={v.name}
                      className={`underline f-thide ${Style['cnt']}`}
                    >
                      {v.name}
                    </p>
                    {v?.radio?.name ? (
                      <span
                        title={v.radio.name}
                        className={`underline f-thide ${Style['artist']}`}
                      >
                        {v.radio.name}
                      </span>
                    ) : null}

                    <span className={`f-thide ${Style['play-num']}`}>
                      播放:{v.listenerCount}
                    </span>
                    <span className={`f-thide ${Style['good']}`}>
                      赞:{v.likedCount}
                    </span>
                    {v?.radio?.category ? (
                      <span title={v.radio.category} className={Style['tag']}>
                        {v.radio.category}
                      </span>
                    ) : null}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </WithLayoutWrap>
    </>
  )
}

export default Recommend
