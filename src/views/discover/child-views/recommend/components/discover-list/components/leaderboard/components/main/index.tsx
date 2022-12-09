import { Link } from 'react-router-dom'
import { memo } from 'react'
import Style from './style.module.css'
const arr = new Array(10).fill(1)
function Main() {
  return (
    <>
      <div className={Style['main']}>
        <ul className={Style['list']}>
          <li className={Style['first-li']}>
            <div className={Style['cver']}>
              <img
                src="https://p4.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=100y100"
                alt=""
              />
              <Link to="/" title="飙升榜" className="yxz-coverall"></Link>
            </div>
            <div className={Style['tit']}>
              <h3>飙升榜</h3>
              <div className={Style['btn']}>
                <Link to="/" className="yxz-sprite"></Link>
                <Link to="/" className="yxz-sprite"></Link>
              </div>
            </div>
          </li>
          {arr.map((_, idx: number) => (
            <li key={idx}>
              <span>{++idx}</span>
              <Link to="/" className="f-thide">
                Beside Me
              </Link>

              <div className={Style['oper-box']}>
                <div className={Style['oper']}>
                  <Link to="/" className="yxz-sprite">
                    播放
                  </Link>
                  <Link to="/" className="yxz-icon">
                    添加到播放列表
                  </Link>
                  <Link to="/" className="yxz-sprite">
                    收藏
                  </Link>
                </div>
              </div>
            </li>
          ))}
          <li className={Style['last']}>
            <Link to="/all">查看全部{'>'}</Link>
          </li>
        </ul>
        <ul className={Style['list']}>
          <li className={Style['first-li']}>
            <div className={Style['cver']}>
              <img
                src="https://p4.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg?param=100y100"
                alt=""
              />
              <Link to="/" title="新歌榜" className="yxz-coverall"></Link>
            </div>
            <div className={Style['tit']}>
              <h3>新歌榜</h3>
              <div className={Style['btn']}>
                <Link to="/" className="yxz-sprite"></Link>
                <Link to="/" className="yxz-sprite"></Link>
              </div>
            </div>
          </li>
          {arr.map((_, idx: number) => (
            <li key={idx}>
              <span>{++idx}</span>
              <Link to="/" className="f-thide">
                Beside Me
              </Link>
            </li>
          ))}
          <li className={Style['last']}>
            <Link to="/all">查看全部{'>'}</Link>
          </li>
        </ul>
        <ul className={Style['list']}>
          <li className={Style['first-li']}>
            <div className={Style['cver']}>
              <img
                src="https://p4.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg?param=100y100"
                alt=""
              />
              <Link to="/" title="原创榜" className="yxz-coverall"></Link>
            </div>
            <div className={Style['tit']}>
              <h3>原创榜</h3>
              <div className={Style['btn']}>
                <Link to="/" className="yxz-sprite"></Link>
                <Link to="/" className="yxz-sprite"></Link>
              </div>
            </div>
          </li>
          {arr.map((_, idx: number) => (
            <li key={idx}>
              <span>{++idx}</span>
              <Link to="/" className="f-thide">
                Beside Me
              </Link>
            </li>
          ))}
          <li className={Style['last']}>
            <Link to="/all">查看全部{'>'}</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default memo(Main)
