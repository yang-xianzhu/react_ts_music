import { memo } from 'react'
import mainStyle from './style.module.css'

const arr = new Array(10).fill(1)

function ListMain() {
  return (
    <>
      <div style={{ marginTop: '30px' }}>
        <ul className={mainStyle['m-cvrlst']}>
          {arr.map((v, idx) => (
            <li key={idx}>
              <div className={mainStyle['cover']}>
                <div className={mainStyle['mark']}>
                  <span className={mainStyle['icon-headset']}></span>
                  <span className={mainStyle['play-text']}>2833万</span>
                  <span className={mainStyle['play-icon']}></span>
                  <span></span>
                </div>
              </div>
              <p className={mainStyle['dec']}>文本</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default memo(ListMain)
