import { memo } from 'react'
import SingerHeader from '../singer-header'
import type { ISingerHead } from '../singer-header/type'
const info: ISingerHead = {
  title: '热门主播',
  isShowRightTitle: false
}
function HotHost() {
  return (
    <>
      <SingerHeader {...info} />
    </>
  )
}

export default memo(HotHost)
