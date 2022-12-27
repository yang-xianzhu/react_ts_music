import { FC, useState, memo, useEffect } from 'react'
import Style from './style.module.css'
import { getProgramRecommend } from '@/api/djCatelist'
import type { IList } from './type'
import { transitionSamllImg } from '@/utils'
import store from '@/store'
import { fetchCurrentSongAction } from '@/store/modules/player/player'

const RecommendedMain: FC = () => {
  const [list, setList] = useState([] as IList[])
  function getData() {
    getProgramRecommend().then((res) => {
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
      <ul className={Style['list']}>
        {list.length > 0
          ? list.map((v) => (
              <li key={v.id}>
                <div className={Style['img-box']}>
                  <i
                    title="播放"
                    className={`yxz-iconall ${Style['play']}`}
                    onClick={() => play(v.mainSong.id)}
                  >
                    播放
                  </i>
                  <img
                    src={transitionSamllImg(v.radio.intervenePicUrl, 40, 40)}
                    alt={v.name}
                  />
                </div>
                <div className={Style['cnt']}>
                  <p
                    title={v.name}
                    className={`f-thide underline ${Style['text']}`}
                  >
                    {v.name}
                  </p>
                  {v?.radio?.name ? (
                    <span
                      title={v.radio.name}
                      className={`f-thide underline ${Style['dec']}`}
                    >
                      {v.radio.name}
                    </span>
                  ) : null}
                </div>
                {v?.radio?.category ? (
                  <span className={Style['tag']} title={v.radio.category}>
                    {v.radio.category}
                  </span>
                ) : null}
              </li>
            ))
          : null}
      </ul>
    </>
  )
}

export default memo(RecommendedMain)
