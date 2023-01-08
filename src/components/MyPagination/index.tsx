import { FC, useMemo, useState } from 'react'
import { memo } from 'react'
import Style from './style.module.css'

interface IPagination {
  style?: {}
  total?: number
  pageSize?: number
  current?: number
  onChange?: (page: number, pageSize: number) => void | undefined
}

const MyPagination: FC<IPagination> = (props) => {
  const {
    total = 10,
    pageSize = 10,
    current = 1,
    onChange = () => {},
    style = {}
  } = props
  const [currentPage, setCurrentPage] = useState<number>(1)

  // 部分展示页码数组
  let pageNumArr: Array<number> = []
  const length = Math.floor(total / pageSize)

  // 是否只有一页
  const isOnePage = useMemo(
    () => current === length || length === 0,
    [current, total, pageSize]
  )
  function handlePageNumArr() {
    // 完整页码数组
    const pageNumArrAll: Array<number> = new Array(length === 0 ? 1 : length)
      .fill(1)
      .map((_: number, idx: number) => ++idx)

    if (pageNumArrAll.length <= 10) {
      pageNumArr = pageNumArrAll
      return
    }

    pageNumArr = pageNumArrAll
      .map((v: number, idx: number, arr: number[]) => {
        const f = pageNumArrAll[current]
        if (v === arr.length || v < 9) {
          return v
        }
        return -1
      })
      .filter((v: number) => v > 0)

    const t = Math.floor(total / pageSize)

    if (current <= 5) {
      // 右边省略号
      pageNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, t]
    } else if (current > t - 4) {
      // 左边省略号
      pageNumArr = [
        1,
        -1,
        t - 8,
        t - 7,
        t - 6,
        t - 5,
        t - 4,
        t - 3,
        t - 2,
        t - 1,
        t
      ]
    } else {
      // 两边省略号
      pageNumArr = [
        1,
        -1,
        current - 3,
        current - 2,
        current - 1,
        current,
        current + 1,
        current + 2,
        current + 3,
        -1,
        t
      ]
    }
  }

  handlePageNumArr()

  return (
    <>
      <div style={style} className={Style['page']}>
        <span
          className={`yxz-button ${Style['btn']} ${Style['prev']} ${
            current === 1 ? Style['disable'] : ''
          }`}
          style={{
            backgroundPosition: current === 1 ? '0 -620px' : '0 -560px'
          }}
          onClick={() => {
            if (current === 1) {
              return
            }
            onChange(current - 1, pageSize)
          }}
        >
          上一页
        </span>
        {/* 页码start */}
        {/* {pageNumArr} */}
        {pageNumArr.map((v: number, idx: number, arr: Array<number>) =>
          v === -1 ? (
            <i
              key={idx}
              style={{
                marginLeft: '6px'
              }}
            >
              ...
            </i>
          ) : (
            <span
              key={idx}
              className={`yxz-button ${Style['page-num']} ${
                current === v ? Style['seleted'] : ''
              }`}
              onClick={() => {
                if (currentPage === v) {
                  return
                }

                setCurrentPage(v)
                onChange(v, pageSize)
              }}
            >
              {v}
            </span>
          )
        )}
        {/* 页码end */}
        <span
          className={`yxz-button ${Style['btn']} ${Style['next']} ${
            isOnePage && Style['disable']
          }`}
          style={{
            backgroundPosition: isOnePage ? '-75px -620px' : '-75px -560px'
          }}
          onClick={() => {
            if (isOnePage) {
              return
            }
            onChange(current + 1, pageSize)
          }}
        >
          下一页
        </span>
      </div>
    </>
  )
}

export default memo(MyPagination)
