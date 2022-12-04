import { memo } from 'react'
import SingerHeader from '../singer-header'
import type { ISingerHead } from '../singer-header/type'
import HotHostStyle from './style.module.css'
const info: ISingerHead = {
  title: '热门主播',
  isShowRightTitle: false
}
const arr = [1, 1, 1, 1]
function HotHost() {
  return (
    <>
      <SingerHeader {...info} />
      <ul className={HotHostStyle['hot-host-container']}>
        {arr.map((_, idx: number) => (
          <li key={idx}>
            <img src="" alt="" />
            <div className={`${HotHostStyle['dec-box']} f-thide`}>
              <p>陈立</p>
              <span>歌手、播客节目《维维道来》主理人</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default memo(HotHost)
