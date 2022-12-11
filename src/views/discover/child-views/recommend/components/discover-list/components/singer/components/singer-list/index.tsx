import { memo, useEffect, useState } from 'react'
import SingerListStyle from './style.module.css'
import SingerHeader from '../singer-header'
import type { ISingerHead } from '../singer-header/type'
import { getArtistList } from '@/api/recommend'
import type { IList } from './type'
import { transitionSamllImg } from '@/utils'

const headerInfo: ISingerHead = {
  title: '入驻歌手'
}

const arr = [1, 1, 1, 1, 1]
function SingerList() {
  const [list, setList] = useState<IList[]>([])

  useEffect(() => {
    getArtistList({
      limit: 5
    }).then((res: any) => {
      setList(res.artists)
    })
  }, [])
  return (
    <div style={{ paddingBottom: '14px' }}>
      <SingerHeader {...headerInfo} />
      <ul className={SingerListStyle['singer-list']}>
        {list.map((v: IList) => (
          <li key={v.id}>
            <img
              src={transitionSamllImg(v.picUrl, 62, 62)}
              alt={v.name}
              title={v.name}
            />
            <div className={SingerListStyle['info']}>
              <strong className="f-thide">{v.name}</strong>
              <span className="f-thide">{v.alias.toString()}</span>
            </div>
          </li>
        ))}
      </ul>
      <span className={SingerListStyle['btn']}>申请成为网易音乐人</span>
    </div>
  )
}

export default memo(SingerList)
