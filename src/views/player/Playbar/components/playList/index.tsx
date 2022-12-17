import { FC, memo, useEffect, useRef } from 'react'
import Style from './style.module.css'
import { useSelector } from 'react-redux'

interface IProps {
  handleSongTitle: (state: boolean) => void
}

interface IItem {
  text: string
  time: number
}

const PlayList: FC<IProps> = (props) => {
  const listlyricRef = useRef<HTMLDivElement | null>(null)
  // 获取当前播放歌曲信息
  const { lyrics, lyricsIdx, currentSong } = useSelector(
    (state: any) => state.player
  )

  //   useEffect(() => {
  //     console.log(lyrics)
  //   }, [])

  useEffect(() => {
    // console.log('当前滚动条位置:', lyricsIdx * 32)
    if (lyricsIdx * 32 - 32 * 3 <= 0) return
    listlyricRef.current!.scrollTo({
      top: lyricsIdx * 32 - 32 * 3,
      behavior: 'smooth'
    })
  }, [lyricsIdx])
  return (
    <>
      <div className={Style['playlist']}>
        <div className={Style['listhd']}>
          <h4>播放列表(8)</h4>
          <a href="javascript:void(0)" className={Style['addall']}>
            <span></span>
            收藏全部
          </a>
          <a href="javascript:void(0)" className={Style['clean']}>
            <span></span>
            清除
          </a>
          <p className={Style['song-title']}>{currentSong?.name}</p>
          <a
            href="javascript:void(0)"
            className={`yxz-playlist ${Style['close']}`}
            onClick={() => {
              props.handleSongTitle(false)
            }}
          >
            关闭
          </a>
        </div>

        <div className={Style['listbd']}>
          {/* mask */}
          <div
            className={Style['mask-bg']}
            style={{
              background: currentSong?.al?.picUrl
                ? `url(https://music.163.com/api/img/blur/${currentSong?.al?.pic_str})`
                : '#000'
            }}
          ></div>
          {/* left */}
          <div className={Style['listbdc']}></div>
          {/* right */}
          <div className={Style['listlyric-container']}>
            <div className={Style['listlyric']} ref={listlyricRef}>
              {lyrics?.map((v: IItem, idx: number) => {
                // if (v.text === '') return null
                return (
                  <p
                    key={idx}
                    className={`${lyricsIdx === idx && Style['active']}`}
                  >
                    {v.text}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(PlayList)
