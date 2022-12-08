import { getAlbumList } from '@/api/newAlbum'
import { memo, useEffect, useState } from 'react'
import Style from './style.module.css'
import { TChangType, IList } from './type'
import { transitionSamllImg } from '@/utils'

const RunHorse = () => {
  const [currentNum, setCurrentNum] = useState(0)
  const [left, setLeft] = useState(26)
  // 存储list数据
  const [list, setList] = useState<IList[]>([])

  useEffect(() => {
    getAlbumList({
      limit: 10
    }).then((res: any) => {
      const list = res.albums
      const n1 = list.slice(0, 5)
      const n2 = list.slice(5, 10)
      setList([n1, n2])
    })
  }, [])

  // 左右切换
  const handleClick = (type: TChangType) => {
    if (type === 'right') {
      if (currentNum >= list.length - 1) {
        return
      }
      setCurrentNum((current) => {
        return current + 1
      })
      setLeft(left - 660)
    } else {
      if (currentNum <= 0) {
        return
      }
      setCurrentNum((current) => {
        return current - 1
      })

      setLeft(left + 660)
    }
  }
  return (
    <>
      <div className={Style['runhorse-main']}>
        {!(currentNum <= 0) && (
          <span
            className={`yxz-sprite ${Style['btn']} ${Style['btnl']}`}
            onClick={() => handleClick('left')}
          ></span>
        )}
        {!(currentNum >= list.length - 1) && (
          <span
            className={`yxz-sprite ${Style['btn']} ${Style['btnr']}`}
            onClick={() => handleClick('right')}
          ></span>
        )}
        <div className={Style['inner']}>
          {list.length > 0 &&
            list.map((item: any, idx: number) => (
              <ul
                className={Style['list']}
                style={{
                  left: idx === 0 ? left : left + idx * 660 // 25 685  1345 2005
                }}
                key={idx}
              >
                {item.map((v: IList) => (
                  <li key={v.id} className="yxz-coverall">
                    <div className={Style['item-box']}>
                      <img
                        src={transitionSamllImg(v.blurPicUrl, 100, 100)}
                        alt=""
                      />
                      <p className={`f-thide ${Style['song-name']}`}>
                        {v.name}
                      </p>
                      <p className={`f-thide ${Style['singer-name']}`}>
                        {v.artist.name}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
        </div>
      </div>
    </>
  )
}

export default memo(RunHorse)
