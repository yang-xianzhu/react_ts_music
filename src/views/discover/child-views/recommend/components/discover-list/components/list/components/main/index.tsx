import { memo, useEffect, useState } from 'react'
import mainStyle from './style.module.css'
import { getPersonalized } from '@/api/recommend'

function ListMain() {
  const [list, setList] = useState([])

  useEffect(() => {
    getPersonalized().then((res: any) => {
      console.log(res)
      setList(res.result?.slice(1, 9))
    })
  }, [])
  return (
    <>
      {list.length && (
        <div style={{ marginTop: '30px' }}>
          <ul className={mainStyle['m-cvrlst']}>
            {list.map((v: any) => (
              <li key={v.id}>
                <div className={mainStyle['cover']}>
                  <img src={v.picUrl} alt="" />
                  <div className={mainStyle['mark']}>
                    <span className={mainStyle['icon-headset']}></span>
                    <span className={mainStyle['play-text']}>
                      {v.playCount}
                    </span>
                    <span className={mainStyle['play-icon']}></span>
                  </div>
                </div>
                <p className={`${mainStyle['dec']} f-thide`}>{v.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default memo(ListMain)
