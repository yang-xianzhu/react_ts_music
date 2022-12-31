import { FC, memo, useEffect, useMemo, useState } from 'react'
import Style from './style.module.css'
import { getTypeRecommend } from '@/api/djCatelist'
import type { IProps, IList } from './type'
import { transitionSamllImg } from '@/utils'

const ExcellentDj: FC<IProps> = ({ currentId }) => {
  const [list, setList] = useState([] as IList[])

  useEffect(() => {
    getTypeRecommend({ type: currentId!, limit: 5 }).then((res) => {
      setList(res?.djRadios?.slice(0, 5) || [])
    })
  }, [currentId])

  return (
    <>
      <div className={Style['head']}>
        <h3>优秀新电台</h3>
      </div>
      <ul className={Style['list']}>
        {list.length > 0 &&
          list.map((v) => (
            <li key={v.id}>
              <img
                src={transitionSamllImg(v.intervenePicUrl, 200, 200)}
                alt={v.name}
                title={v.name}
              />
              <h3 className="underline">{v.name}</h3>
              <span className="f-thide">{v.rcmdtext}</span>
            </li>
          ))}
      </ul>
    </>
  )
}

export default memo(ExcellentDj)
