import { getAlbumList } from '@/api/newAlbum'
import { memo, useEffect, useState } from 'react'
import Style from './style.module.css'
import { TChangType, IList } from './type'
import { transitionSamllImg } from '@/utils'

const arr = new Array(5).fill(1)
const RunHorse = () => {
  const [currentNum, setCurrentNum] = useState(0)
  const [left, setLeft] = useState(25)
  // 存储list数据
  const [list, setList] = useState<IList[]>([])

  useEffect(() => {
    getAlbumList({
      limit: 15
    }).then((res: any) => {
      //   console.log('res', res)
      const n1 = res.products.slice(0, 5)
      const n2 = res.products.slice(5, 10)
      const n3 = res.products.slice(10, 15)
      setList([n1, n2, n3])
    })
  }, [])

  useEffect(() => {
    console.log('left', left)
  }, [left])

  // 左右切换
  const handleClick = (type: TChangType) => {
    if (type === 'right') {
      if (currentNum >= list.length - 1) {
        console.log('@@')
        return
      }
      setCurrentNum((current) => {
        return current + 1
      })
      setLeft(left - 660)
    } else {
      if (currentNum <= 0) {
        console.log('@@')
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
        {
          <span
            className={`yxz-sprite ${Style['btn']} ${Style['btnl']}`}
            onClick={() => handleClick('left')}
          ></span>
        }
        <span
          className={`yxz-sprite ${Style['btn']} ${Style['btnr']}`}
          onClick={() => handleClick('right')}
        ></span>
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
                  <li key={v.albumId} className="yxz-coverall">
                    <div className={Style['item-box']}>
                      <img
                        src={transitionSamllImg(v.coverUrl, 100, 100)}
                        alt=""
                      />
                      <p className={`f-thide ${Style['song-name']}`}>
                        {v.albumName}
                      </p>
                      <p className={`f-thide ${Style['singer-name']}`}>
                        {v.artistName}
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
