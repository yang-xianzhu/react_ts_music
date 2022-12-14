import { FC, memo, useEffect, useRef } from 'react'
import Style from './style.module.css'
import { useSelector } from 'react-redux'
import type { IPlayer } from '@/store/modules/player/type'
import { transitionTimer } from '@/utils'
import store from '@/store'
import { fetchCurrentSongAction } from '@/store/modules/player/player'

interface IProps {
  handleSongTitle: (state: boolean) => void
  isShowSongTitle: boolean
}

interface IItem {
  text: string
  time: number
}

const PlayList: FC<IProps> = (props) => {
  const listlyricRef = useRef<HTMLDivElement | null>(null)
  // 获取当前播放歌曲信息
  const { lyrics, lyricsIdx, currentSong, playSongList, playSongIndex } =
    useSelector((state: any) => state.player)

  function handleScrollTop(currentTop: number = 0) {
    listlyricRef.current!.scrollTo({
      top: currentTop,
      behavior: 'smooth'
    })
  }

  // 匹配当前播放的歌词
  useEffect(() => {
    if (lyricsIdx * 32 - 32 * 3 <= 0) return

    handleScrollTop(lyricsIdx * 32 - 32 * 3)
  }, [lyricsIdx])

  useEffect(() => {
    handleScrollTop()
  }, [currentSong])

  // 切换当前歌曲
  function handleCurSong(item: IPlayer) {
    store.dispatch(fetchCurrentSongAction({ ids: item.id }))
  }

  return (
    <>
      <div
        className={Style['playlist']}
        style={{
          display: props.isShowSongTitle ? 'block' : 'none'
        }}
      >
        <div className={Style['listhd']}>
          <h4>播放列表({playSongList.length})</h4>
          <a href="#/" className={Style['addall']}>
            <span className={`yxz-playlist ${Style['ico-add']}`}></span>
            收藏全部
          </a>
          <a href="#/" className={Style['clean']}>
            <span className={`yxz-playlist ${Style['ico-clean']}`}></span>
            清除
          </a>
          <p className={`f-thide ${Style['song-title']}`}>
            {currentSong?.name}
          </p>
          <span
            className={`yxz-playlist ${Style['close']}`}
            onClick={() => {
              props.handleSongTitle(false)
            }}
          >
            关闭
          </span>
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
          <div className={Style['listbdc']}>
            <ul className={Style['listbdc-list']}>
              {playSongList.map((v: IPlayer, idx: number) => (
                <li
                  key={v.id}
                  className={`${idx === playSongIndex && Style['active']} ${
                    Style['item']
                  }`}
                  onClick={() => handleCurSong(v)}
                >
                  {idx === playSongIndex && (
                    <div className={`yxz-playlist ${Style['playicn']}`}></div>
                  )}
                  <p className={`yxz-col-2 ${Style['song-title']}`}>{v.name}</p>
                  <p className={`yxz-col-4 ${Style['songer']}`}>
                    {v?.ar[0]?.name}
                  </p>
                  <p className={`yxz-col-5 ${Style['time']}`}>
                    {transitionTimer(v?.dt)}
                  </p>
                  <p
                    className={`yxz-col-6 yxz-playlist ${Style['ico-src-dis']}`}
                  >
                    <a href="#/">暂无来源</a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {/* right */}
          <div className={Style['listlyric-container']}>
            <div className={Style['listlyric']} ref={listlyricRef}>
              {lyrics?.map((v: IItem, idx: number) => (
                <p
                  key={idx}
                  className={`${lyricsIdx === idx ? Style['active'] : ''}`}
                >
                  {v.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(PlayList)
