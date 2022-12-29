import { FC, memo, useEffect } from 'react'
import Style from './style.module.css'
import { useRequest } from 'ahooks'
import { getTypeRecommend } from '@/api/djCatelist'
import type { IDjRadios } from './type'
import { transitionSamllImg } from '@/utils'

interface IProps {
  style?: {}
  title: string
  type: number
  onClickAll?: () => void
}

const Rdimore: FC<IProps> = ({ title, type, style }) => {
  const { data } = useRequest(() => getTypeRecommend({ type, limit: 4 }))

  const list: IDjRadios[] = data?.djRadios

  return (
    <>
      <header className={Style['header']} style={style}>
        <h3>
          {title}
          <i>·</i>
          电台
        </h3>
        <span className="underline">
          <i>更多</i>
          <em>{'>'}</em>
        </span>
      </header>
      <ul className={Style['rdilist']}>
        {list?.length > 0
          ? list.slice(0, 4).map((v) => (
              <li key={v.id}>
                <div className={Style['img']} title={v.name}>
                  <img
                    src={transitionSamllImg(v.intervenePicUrl, 200, 200)}
                    alt={v.name}
                  />
                </div>
                <div className={`${Style['cnt']}`}>
                  <h3 title={v.name} className="f-thide underline">
                    {v.name}
                  </h3>
                  <span className="f-thide">{v.rcmdtext}</span>
                </div>
              </li>
            ))
          : null}
      </ul>
    </>
  )
}

export default memo(Rdimore)
