import { memo, useEffect, useState } from 'react'
import mainStyle from './style.module.css'
import { getPersonalized } from '@/api/recommend'
import { numberTransition, transitionSamllImg } from '@/utils'
import type { TList } from './type'

function ListMain() {
  const [list, setList] = useState<TList[]>([])

  useEffect(() => {
    getPersonalized({
      limit: 8
    }).then((res: any) => {
      setList(res.result)
    })
  }, [])
  return (
    <>
      {list.length > 0 && (
        <div style={{ marginTop: '30px' }}>
          <ul className={mainStyle['m-cvrlst']}>
            {list.map((v: TList) => (
              <li key={v.id}>
                <div className={mainStyle['cover']}>
                  <a href="#" title={v.name} className={mainStyle['msk']}></a>
                  <img src={transitionSamllImg(v.picUrl, 140, 140)} alt="" />
                  <div className={mainStyle['mark']}>
                    <span className={mainStyle['icon-headset']}></span>
                    {/* 播放次数 */}
                    <span className={mainStyle['play-text']}>
                      {numberTransition(v.playCount)}
                    </span>
                    <span className={mainStyle['play-icon']}></span>
                  </div>
                </div>
                <p className={`${mainStyle['dec']}`}>{v.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default memo(ListMain)
