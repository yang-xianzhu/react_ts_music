import { FC, useEffect } from 'react'
import { memo, useState } from 'react'
import Style from './style.module.css'
import { getDjCateList } from '@/api/djCatelist'
import type { ICategories } from './type'
import { useNavigate, useLocation } from 'react-router-dom'
import { transitionUrlParams } from '@/utils'

const CateList: FC = () => {
  const push = useNavigate()
  const search = useLocation().search
  const currentId = transitionUrlParams(search, 'id')

  const [list, setList] = useState<ICategories[]>([])
  const [currentIdx, setCurrentIdx] = useState<number>(1)

  function getData() {
    getDjCateList().then((res) => {
      setList(res?.categories || [])
    })
  }

  function handleId(id: number) {
    if (currentId === String(id)) {
      return
    }
    push(`/discover/djradio?id=${id}&type=category`)
  }

  function handleCurrentIdx(cur: number) {
    const total = Math.ceil(list.length / 18)
    setCurrentIdx(cur < 1 ? total : cur > total ? 1 : cur)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div className={Style['muti']}>
        <span
          className={`yxz-radio_slide ${Style['btn']} ${Style['prev']}`}
          onClick={() => handleCurrentIdx(currentIdx - 1)}
        >
          向左
        </span>
        <span
          className={`yxz-radio_slide ${Style['btn']} ${Style['next']}`}
          onClick={() => handleCurrentIdx(currentIdx + 1)}
        >
          向右
        </span>
        <ul className={Style['box']}>
          {list.length > 0
            ? list.slice((currentIdx - 1) * 18, currentIdx * 18).map((v) => (
                <li
                  key={v.id}
                  className={`yxz-radio_bg ${
                    currentId === String(v.id) && Style['active']
                  }`}
                  onClick={() => handleId(v.id)}
                >
                  <div
                    className={Style['img']}
                    style={{
                      backgroundImage: `url(${v.picWebUrl})`,
                      backgroundPosition:
                        currentId === String(v.id) ? '-48px 0' : '0 0'
                    }}
                  ></div>
                  <em
                    style={{
                      marginTop: '-3px',
                      fontSize: '12px'
                    }}
                  >
                    {v.name}
                  </em>
                </li>
              ))
            : null}
        </ul>
        {/* 小圆点 */}
        <ol className={`${Style['dol']}`}>
          {new Array(Math.ceil(list.length / 18))
            .fill(1)
            .map((_, idx: number) => (
              <li
                key={idx}
                className="yxz-radio_slide"
                style={{
                  backgroundPosition: currentIdx === ++idx ? '-30px 0' : '0 0'
                }}
                onClick={() => handleCurrentIdx(idx)}
              ></li>
            ))}
        </ol>
      </div>
    </>
  )
}

export default memo(CateList)
