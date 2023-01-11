import { FC, memo, useEffect, useMemo, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import HeadTitle from '@/components/HeadTitle'
import { transitionSamllImg, transitionUrlParams } from '@/utils'
import Style from './style.module.css'
import { getArtList } from '@/api/artlist'
import { ISgerList, ISgerProps, ISettleList, ISgerItem } from './type'

// 入驻歌手假数据
const settleInlist: ISettleList[] = [
  {
    imgUrl:
      'https://p2.music.126.net/rCsLFXha6SLis0tV7yZ5fA==/109951165588539704.jpg?param=130y130',
    songer: '张惠妹'
  },
  {
    imgUrl:
      'https://p2.music.126.net/TQZGbxp-xnJla-q7ii9z0A==/1364493985498917.jpg?param=130y130',
    songer: '吴莫愁'
  },
  {
    imgUrl:
      'https://p2.music.126.net/ZEEvSOoXV7Dv2QEkqUN3zg==/109951165625860507.jpg?param=130y130',
    songer: '孙楠'
  },
  {
    imgUrl:
      'https://p2.music.126.net/1GIlkxKmvKu66ufU83FyvA==/31885837222663.jpg?param=130y130',
    songer: '老狼'
  },
  {
    imgUrl:
      'https://p2.music.126.net/MXMZYksJmsa0gcGkuk2mDQ==/109951167712155407.jpg?param=130y130',
    songer: '陈楚生'
  },
  {
    imgUrl:
      'https://p2.music.126.net/HciCtD7swUU_D9wem9NfNA==/6044015418524944.jpg?param=130y130',
    songer: '陶喆'
  },
  {
    imgUrl:
      'https://p2.music.126.net/36WeG5-ykSvhlzujVMtWyw==/109951166229071726.jpg?param=130y130',
    songer: '蔡健雅'
  },
  {
    imgUrl:
      'https://p2.music.126.net/6RuXmqmZw-GGoO5-FOfZMw==/109951166564073533.jpg?param=130y130',
    songer: '黄小琥'
  },
  {
    imgUrl:
      'https://p2.music.126.net/d893ZcYNPz7zhOm0NP6G3Q==/109951166839019298.jpg?param=130y130',
    songer: '胡海泉'
  },
  {
    imgUrl:
      'https://p2.music.126.net/Q4JSaV98wuU6xElATsFjAw==/3261151495434543.jpg?param=130y130',
    songer: '杨宗纬'
  }
]

// 入驻歌手列表
const SettleList: FC<ISgerProps> = ({ list = [] }) => {
  return (
    <div
      style={{
        marginTop: '20px'
      }}
    >
      <ul className={Style['cvrlst']}>
        {list.map((v, idx: number) => (
          <li key={idx}>
            <div className={Style['cover']}>
              <img src={v.imgUrl} alt={v.songer} />
              <Link
                to={''}
                className={`yxz-coverall text-indext`}
                title={`${v.songer}的音乐`}
              >
                {v.songer}
              </Link>
            </div>
            <p className={`${Style['songer']}`}>
              <Link to={''} className="underline">
                {v.songer}
              </Link>
              <i className="yxz-icon"></i>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

// 常规歌手列表
const SgerList: FC<ISgerList> = ({ list = [] }) => {
  return (
    <div
      style={{
        marginTop: '20px'
      }}
    >
      <ul className={Style['cvrlst']}>
        {list.map((v) => (
          <li key={v.id}>
            <div className={Style['cover']}>
              <img src={transitionSamllImg(v.picUrl, 130, 130)} alt={v.name} />
              <Link
                to={''}
                className={`yxz-coverall text-indext`}
                title={`${v.name}的音乐`}
              >
                {v.name}
              </Link>
            </div>
            <p className={`${Style['songer']}`}>
              <Link to={''} className="underline">
                {v.name}
              </Link>
              <i className="yxz-icon"></i>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const MainList: FC = () => {
  const search = useLocation().search
  const currentTitle = useMemo(
    () => decodeURIComponent(transitionUrlParams(search, 'text') as string),
    [search]
  )

  const [list, setList] = useState([] as ISgerItem[])

  useEffect(() => {
    getArtList({
      area: -1,
      type: -1
    }).then((res) => {
      setList(res?.artists)
      //   console.log(res)
    })
  }, [])

  return (
    <div style={{ flex: '1', padding: '40px', overflow: 'hidden' }}>
      <HeadTitle title={currentTitle} isShowAll={currentTitle === '推荐歌手'} />
      <SettleList list={settleInlist} />
      <HeadTitle title="热门歌手" isShowAll={false} />
      <SgerList list={list} />
    </div>
  )
}

export default memo(MainList)
