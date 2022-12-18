import { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import indexStyle from '@/styles/index.module.css'
import bannerStyle from './index.module.css'
import { CSSTransition } from 'react-transition-group'
import type { TBanner, TBannerChange } from './type'
import './transition.css'
import { getBannerList } from '@/api/recommend'

function Banner() {
  const push = useNavigate()
  const [isFlag, setIsFlag] = useState<boolean>(false)

  const [currentBanner, setCurrentBanner] = useState<number>(0)
  // 轮播图数据
  const [bannerList, setbannerList] = useState<TBanner[]>([])

  useEffect(() => {
    getBannerList().then((res: any) => {
      setbannerList(res.banners)
    })
  }, [])

  // 上下切换
  const handleBanner = (num: number, type: TBannerChange) => {
    setCurrentBanner((idx: number) => {
      setIsFlag(true)
      Promise.resolve().then(() => {
        setIsFlag(false)
      })
      return type === 'add'
        ? idx + num > bannerList.length - 1
          ? 0
          : idx + num
        : idx + num < 0
        ? bannerList.length - 1
        : idx + num
    })
  }
  return (
    <>
      {bannerList.length > 0 && (
        <div
          style={{
            backgroundImage: `url(${`${bannerList[currentBanner].imageUrl}?imageView&blur=40x20`})`,
            backgroundSize: ' 6000px',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backdropFilter: `blur(100px)`,
            transition: 'background-image 1s ease'
          }}
        >
          <div
            className={`${indexStyle.warp}`}
            style={{ height: '285px', display: 'flex', position: 'relative' }}
          >
            {/* banner部分 */}
            <CSSTransition timeout={1000} classNames="banner-img" in={isFlag}>
              <a
                style={{
                  marginLeft: '55px',
                  height: '100%',
                  display: 'block',
                  position: 'relative'
                }}
              >
                {/* 小圆点 */}
                <ul className={bannerStyle.dots}>
                  {bannerList.map((v: TBanner, idx: number) => (
                    <li
                      key={idx}
                      className={
                        currentBanner === idx ? bannerStyle['current'] : ''
                      }
                      onClick={() => {
                        setCurrentBanner(idx)
                      }}
                    ></li>
                  ))}
                </ul>

                <img
                  style={{ width: '730px', height: '100%' }}
                  src={bannerList[currentBanner].imageUrl}
                  alt=""
                />
              </a>
            </CSSTransition>
            {/* 右边下载部分 */}
            <div className={bannerStyle['download']}>
              <span
                onClick={() => {
                  push('/download')
                }}
              >
                下载客户端
              </span>
              <p
                style={{
                  lineHeight: '30px'
                }}
              >
                PC 安卓 iPhone WP iPad Mac 六大客户端
              </p>
            </div>
            {/* 左右箭头 */}
            <span
              className={`${bannerStyle['btn']} ${bannerStyle['banl']}`}
              onClick={() => handleBanner(-1, 'reduce')}
            ></span>
            <span
              onClick={() => handleBanner(1, 'add')}
              className={`${bannerStyle['btn']} ${bannerStyle['banr']}`}
            ></span>
          </div>
        </div>
      )}
    </>
  )
}

export default memo(Banner)
