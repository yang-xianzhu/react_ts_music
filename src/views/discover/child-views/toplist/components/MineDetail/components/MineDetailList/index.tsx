import type { FC } from 'react'
import type { Track as ITrack } from '../MineDetailHeader/type'
import Style from './style.module.css'

interface IProps {
  list: ITrack[]
  playCount: number
}

const MineDetailList: FC<IProps> = (props) => {
  const {} = props.list
  return (
    <>
      <header className={Style['header']}>
        <div className={Style['head-left']}>
          <h1>歌曲列表</h1>
          <span style={{ color: '#666' }}>100首歌</span>
        </div>
        <div>
          <span>播放:</span>
          <strong className={`${Style['play-num']}`}>{props.playCount}</strong>
          <em>次</em>
        </div>
      </header>
      {/* 表格 */}
      list
    </>
  )
}

export default MineDetailList
