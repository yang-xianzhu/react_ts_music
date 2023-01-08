import { FC, memo, Fragment } from 'react'
import Style from './style.module.css'
import type { IList } from './type'
import { transitionSamllImg } from '@/utils'

const List: FC<{ list: IList[] }> = ({ list }) => {
  function getAllTitle(arr: any[]): string {
    return arr
      .map((v, idx: number) => (idx === 0 ? v.name : `  /  ${v.name}`))
      .join('')
  }
  return (
    <>
      <ul
        className={Style['list']}
        style={{
          marginTop: '20px'
        }}
      >
        {list.map((v) => (
          <li key={v.id} className={Style['item']}>
            <div className={Style['cover-img']} title={v.name}>
              <img src={transitionSamllImg(v.picUrl, 130, 130)} alt="" />
              <a href="#/" className={`yxz-coverall ${Style['mask']}`}>
                {/* 播放按钮 */}
                <span title="播放" className={`yxz-iconall ${Style['play']}`}>
                  播放
                </span>
              </a>
            </div>
            <p className={`underline f-thide ${Style['dec']}`}>{v.name}</p>
            <p className={`f-thide ${Style['text']}`}>
              {v.artists.map((i, index: number, arr) =>
                index === 0 ? (
                  <span
                    key={i.id}
                    className="underline"
                    title={getAllTitle(arr)}
                  >
                    {i.name}
                  </span>
                ) : (
                  <Fragment key={i.id}>
                    <i
                      style={{
                        padding: '0 4px'
                      }}
                    >
                      /
                    </i>
                    <span className="underline" title={getAllTitle(arr)}>
                      {i.name}
                    </span>
                  </Fragment>
                )
              )}
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default memo(List)
