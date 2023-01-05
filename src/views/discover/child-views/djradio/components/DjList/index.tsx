import { FC, memo, useEffect, useMemo, useState } from 'react'
import Style from './style.module.css'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  backTopTransiton,
  transitionSamllImg,
  transitionUrlParams
} from '@/utils'
import { getDjRadio } from '@/api/djCatelist'
import MyPagination from '@/components/MyPagination'
import type { TListData } from './type'

interface IProps {
  currentId: number | undefined
}

const DjList: FC<IProps> = ({ currentId }) => {
  const push = useNavigate()
  const search = useLocation().search

  const [list, setList] = useState([] as TListData[])

  const [total, setTotal] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const currentOrder = useMemo(() => {
    return transitionUrlParams(search, 'order') || '0'
  }, [search])

  useEffect(() => {
    getDjRadio({
      cateId: String(currentId),
      limit: 34,
      offset: (currentPage - 1) * 34
    }).then((res) => {
      setList(res?.djRadios || [])
      setTotal(res?.count)
    })
  }, [currentId, currentPage])

  function handleType(order: number) {
    push(`/discover/djradio/?id=3&type=category&order=${order}&_hash=allradios`)
  }

  return (
    <>
      <div
        style={{
          marginTop: '30px'
        }}
      >
        <div className={Style['head']}>
          <h3>电台排行榜</h3>
          <div className={Style['change']}>
            <span
              onClick={() => handleType(1)}
              className={`underline ${
                currentOrder === '1' ? Style['active'] : ''
              }`}
            >
              上升最快
            </span>
            <span
              onClick={() => handleType(0)}
              className={`underline ${
                currentOrder === '0' ? Style['active'] : ''
              }`}
            >
              最热电台
            </span>
          </div>
        </div>
        {/* list */}
        <ul className={Style['rdilist']}>
          {list.length > 0 &&
            list.map((v) => (
              <li key={v.id}>
                <div className={Style['img']}>
                  <img
                    src={transitionSamllImg(v.intervenePicUrl, 200, 200)}
                    alt=""
                  />
                </div>
                <div className={Style['cnt']}>
                  <h3 className="underline f-thide">{v.name}</h3>
                  <div className={Style['note']}>
                    <i className="yxz-icon"></i>
                    <p className="underline">{v.dj.nickname}</p>
                  </div>
                  <div className={Style['fc']}>
                    <span>共{v.programCount}期</span>
                    <span> 订阅{v.subCount}次</span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <MyPagination
          style={{
            marginTop: '32px',
            display: 'flex',
            justifyContent: 'center'
          }}
          total={total}
          pageSize={34}
          current={currentPage}
          onChange={(page, pageSize) => {
            setCurrentPage(page)
            backTopTransiton({ top: 650 })
          }}
        />
      </div>
    </>
  )
}

export default memo(DjList)
