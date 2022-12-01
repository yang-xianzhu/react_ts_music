import indexStyle from '@/assets/styles/index.module.css'
import type { TImgList } from './type'
import bannerStyle from './index.module.css'
import { memo, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './transition.css'
import { getBannerList } from '@/api/banner'

const Recomment = () => {
  const [isFlag, setIsFlag] = useState(false)
  const [currentBanner, setCurrentBanner] = useState(0)
  // 轮播图数据
  const [bannerList, setbannerList] = useState<any[]>([])
  // 自动轮播ID
  let timer: number | undefined

  // 自动轮播
  const autohandleBanner = () => {
    if (timer) clearInterval(timer)
    timer = setInterval(() => {
      handleBanner(1, 'add')
    }, 3000)
  }

  // useEffect(() => {
  //   autohandleBanner()
  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])

  useEffect(() => {
    getBannerList().then((res: any) => {
      setbannerList(res.banners)
    })
  }, [])

  // 上下切换
  const handleBanner = (num: number, type: string) => {
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
      <div
        style={{
          // backgroundImage: `url(${
          //   bannerList.length > 0 && bannerList[currentBanner].imageUrl
          // })`,
          backgroundSize: ' 6000px',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backdropFilter: `blur(100px)`
        }}
      >
        <div
          className={`${indexStyle.warp}`}
          style={{ height: '285px', display: 'flex', position: 'relative' }}
        >
          {/* banner部分 */}
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
              {bannerList.map((v: TImgList, idx: number) => (
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
            <CSSTransition timeout={1000} classNames="banner-img" in={isFlag}>
              <img
                style={{ width: '730px', height: '100%' }}
                src={
                  bannerList.length > 0
                    ? bannerList[currentBanner].imageUrl
                    : ''
                }
                alt=""
              />
            </CSSTransition>
          </a>
          {/* 右边下载部分 */}
          <div
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: 'skyblue'
            }}
          >
            下载部分
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
    </>
  )
}

export default memo(Recomment)
