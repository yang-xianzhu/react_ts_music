import type { FC } from 'react'
import Style from './style.module.css'
import type { IPlaylistObj } from './type'
import { transitionSamllImg } from '@/utils'
import { formatTime } from '@/utils/format'

const MineDetailHeader: FC<{ info: IPlaylistObj }> = (props) => {
  const {
    coverImgUrl,
    name,
    commentCount,
    shareCount,
    updateTime,
    subscribedCount
  } = props.info

  function addPlayList() {}
  return (
    <>
      <div
        style={{
          display: 'flex',
          padding: '40px 0'
        }}
      >
        <div className={Style['img-container']}>
          <img src={transitionSamllImg(coverImgUrl, 150, 150)} alt={name} />
        </div>
        <div className={Style['cnt']}>
          <h2 className={Style['title']}>{name}</h2>
          <div className={Style['user']}>
            <i className="yxz-icon"></i>
            <p>最近更新:</p>
            <p className={Style['time']}>{formatTime(updateTime)}</p>
            <span className={Style['update-time']}>（每天更新）</span>
          </div>
          {/* btns */}
          <div className={Style['btns']}>
            {/* 播放按钮start */}
            <span className={`yxz-button2 ${Style['play']}`}>
              <i className={`yxz-button2 f-weight-700`}>
                <em className={`yxz-button2 ${Style['ply']}`}></em>
                播放
              </i>
            </span>
            <span
              className={`yxz-button2 text-indext ${Style['add-play']}`}
              onClick={addPlayList}
            >
              添加播放
            </span>
            {/* 播放按钮end */}
            <span className={`${Style['btn-show']}`}>
              收藏:{subscribedCount}
            </span>
            <span className={`${Style['btn-show']}`}>转发:{shareCount}</span>
            <span className={`${Style['btn-show']}`}>下载</span>
            <span className={`${Style['btn-show']}`}>评论:{commentCount}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default MineDetailHeader
