import { memo, useEffect, useState } from 'react'
import SingerHeader from '../singer-header'
import type { ISingerHead } from '../singer-header/type'
import HotHostStyle from './style.module.css'
import { getHoterList } from '@/api/recommend'
import type { IHotHost } from './type'
import { transitionSamllImg } from '@/utils'
const info: ISingerHead = {
  title: '热门主播',
  isShowRightTitle: false
}
function HotHost() {
  const [list, setList] = useState<IHotHost[]>([])
  useEffect(() => {
    getHoterList({
      type: 'new',
      limit: 17
    }).then(({ toplist }: any) => {
      setList(toplist)
    })
  }, [])
  return (
    <>
      <SingerHeader {...info} />
      <ul className={HotHostStyle['hot-host-container']}>
        {list.slice(0, 12).map((v: IHotHost, idx: number) => (
          <li key={idx}>
            <img
              src={transitionSamllImg(v.picUrl, 40, 40)}
              alt={v.name}
              title={v.name}
            />
            <div className={`${HotHostStyle['dec-box']} f-thide`}>
              <a href="#/">{v.name}</a>
              {v.rcmdtext && <span>{v.rcmdtext}</span>}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default memo(HotHost)
