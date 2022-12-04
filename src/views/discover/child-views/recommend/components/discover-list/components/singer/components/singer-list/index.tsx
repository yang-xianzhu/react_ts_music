import { memo } from 'react'
import SingerListStyle from './style.module.css'
import SingerHeader from '../singer-header'
import type { ISingerHead } from '../singer-header/type'

const headerInfo: ISingerHead = {
  title: '入驻歌手'
}

const arr = [1, 1, 1, 1, 1]
function SingerList() {
  return (
    <div style={{ paddingBottom: '14px' }}>
      <SingerHeader {...headerInfo} />
      <ul className={SingerListStyle['singer-list']}>
        {arr.map((_, idx: number) => (
          <li key={idx}>
            <img src="" alt="" />
            <div className={SingerListStyle['info']}>
              <strong>张惠妹</strong>
              <span>台湾歌手张惠妹</span>
            </div>
          </li>
        ))}
      </ul>
      <span className={SingerListStyle['btn']}>申请成为网易音乐人</span>
    </div>
  )
}

export default memo(SingerList)
