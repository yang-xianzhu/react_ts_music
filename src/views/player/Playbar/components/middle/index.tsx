import { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import Style from './style.module.css'
import { Slider } from 'antd'
import type { IPlayer } from '@/store/modules/player/type'
import { transitionSamllImg, transitionTimer } from '@/utils'
function Middle(props: {
  curPlayBar: number
  duration: number
  currentTime: number
  getCurrentTime: (time: number) => void
  getIsSliding: (isSilding: boolean) => void
  getCurPlayBar: (val: number) => void
  getCurrentTimeText: (val: number) => void
  currentSong: IPlayer
}) {
  const { name, al, ar } = props.currentSong as IPlayer
  return (
    <>
      <div className={Style['middle']}>
        <div className={Style['img-box']}>
          <img
            src={transitionSamllImg(al?.picUrl, 34, 34)}
            alt=""
            title={name}
          />
          <Link to="/" className="yxz-playbar">
            {al.name}
          </Link>
        </div>
        <div className={Style['play']}>
          <div className={Style['top']}>
            <Link to="/" className={Style['words']}>
              {name}
            </Link>
            <Link to="/" className={`yxz-playbar ${Style['mv']}`}></Link>
            <Link to="/" className={Style['by']}>
              {ar[0]?.name}
            </Link>
            <Link to="/" className={`yxz-playbar ${Style['src']}`}></Link>
          </div>

          <div className={'playbar-progress'}>
            <Slider
              step={0.5}
              value={props.curPlayBar}
              tooltip={{ formatter: null }}
              onAfterChange={(val) => {
                const currentTime = (val / 100) * props.duration
                props.getCurrentTime(currentTime)
                // 拖拽完毕，正常播放
                props.getIsSliding(false)
              }}
              onChange={(val: number) => {
                // 正在拖拽：先暂停歌曲播放
                props.getIsSliding(true)
                // 更新进度条
                props.getCurPlayBar(val)
                // 更新当前播放时间
                const currentTime = (val / 100) * props.duration
                props.getCurrentTimeText(currentTime)
              }}
            />
          </div>
        </div>
        <div className={Style['time']}>
          <em
            style={{
              color: '#fff',
              marginRight: '4px'
            }}
          >
            {props.currentTime ? transitionTimer(props.currentTime) : '00:00'}
          </em>
          /
          <em
            style={{
              marginLeft: '4px'
            }}
          >
            {transitionTimer(props.duration)}
          </em>
        </div>
      </div>
    </>
  )
}

export default memo(Middle)
