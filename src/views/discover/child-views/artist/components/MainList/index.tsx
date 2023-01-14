import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import HeadTitle from '@/components/HeadTitle'
import { transitionSamllImg, transitionUrlParams } from '@/utils'
import Style from './style.module.css'
import { getArtList } from '@/api/artlist'
import { ISgerList, ISgerProps, ISettleList, ISgerItem, ILetter } from './type'

// 字母筛选数据
const letterArr: ILetter[] = [
  {
    text: '热门',
    value: -1
  },
  {
    text: 'A',
    value: 65
  },
  {
    text: 'B',
    value: 66
  },
  {
    text: 'C',
    value: 67
  },
  {
    text: 'D',
    value: 68
  },
  {
    text: 'F',
    value: 69
  },
  {
    text: 'G',
    value: 70
  },
  {
    text: 'H',
    value: 71
  },
  {
    text: 'I',
    value: 72
  },
  {
    text: 'J',
    value: 73
  },
  {
    text: 'K',
    value: 74
  },
  {
    text: 'L',
    value: 75
  },
  {
    text: 'M',
    value: 76
  },
  {
    text: 'N',
    value: 77
  },
  {
    text: 'O',
    value: 78
  },
  {
    text: 'P',
    value: 79
  },
  {
    text: 'Q',
    value: 80
  },
  {
    text: 'R',
    value: 81
  },
  {
    text: 'S',
    value: 82
  },
  {
    text: 'T',
    value: 83
  },
  {
    text: 'U',
    value: 84
  },
  {
    text: 'V',
    value: 85
  },
  {
    text: 'W',
    value: 86
  },
  {
    text: 'X',
    value: 87
  },
  {
    text: 'Y',
    value: 88
  },
  {
    text: 'Z',
    value: 89
  },
  {
    text: '其他',
    value: 0
  }
]
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

// 入驻歌手列表组件
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

// 常规歌手列表组件
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
// 字母筛选列表组件
const InitialSelector: FC = memo(() => {
  const search = useLocation().search
  const getCurrentInfo = useCallback(() => {
    return {
      id: transitionUrlParams(decodeURIComponent(search), 'id'),
      text: transitionUrlParams(decodeURIComponent(search), 'text'),
      initial: Number(
        transitionUrlParams(decodeURIComponent(search), 'initial') || -1
      ),
      area: Number(
        transitionUrlParams(decodeURIComponent(search), 'area') || -1
      ),
      songerType: Number(
        transitionUrlParams(decodeURIComponent(search), 'songerType') || -1
      )
    }
  }, [search])

  return (
    <ul className={Style['initial-selector']}>
      {letterArr.map((v, idx: number) => (
        <li
          key={idx}
          className={`underline ${
            getCurrentInfo().initial === v.value ? Style['active'] : ''
          }`}
        >
          <Link
            to={`/discover/artist?type=cat&id=${getCurrentInfo().id}&text=${
              getCurrentInfo().text
            }&initial=${v.value}&area=${getCurrentInfo().area}&songerType=${
              getCurrentInfo().songerType
            }`}
          >
            {v.text}
          </Link>
        </li>
      ))}
    </ul>
  )
})

// 歌手文字列表组件
const SongerTextList: FC<ISgerList> = memo(({ list }) => {
  return (
    <ul className={Style['text-list']}>
      {list.map((v, idx: number) => (
        <li key={idx}>
          <Link
            className="underline f-thide"
            to={'/'}
            title={`${v.name}的音乐`}
          >
            {v.name}
          </Link>
          <i className="yxz-icon" title={`${v.name}的个人主页`}></i>
        </li>
      ))}
    </ul>
  )
})

const MainList: FC = () => {
  const search = useLocation().search
  const currentTitle = useMemo(
    () => decodeURIComponent(transitionUrlParams(search, 'text') as string),
    [search]
  )

  // 处理请求参数
  const handleParams = useCallback(
    (path: string, type: string) => {
      return Number((transitionUrlParams(path, type) as string) || -1)
    },
    [search]
  )

  // 推荐歌手列表的数据
  const [list, setList] = useState([] as ISgerItem[])
  // 其他歌手列表的数据
  const [restList, setRestList] = useState([] as ISgerItem[])
  // eff
  useEffect(() => {
    // 此处因重复跳转路由，导致首次会eff两次，懒得改了
    // console.log('eff')

    if (currentTitle === '推荐歌手') {
      getArtList({
        area: -1,
        type: -1
      }).then((res) => {
        // 热门歌手
        setList(res?.artists?.slice(0, 10))
      })
    } else {
      getArtList({
        area: handleParams(search, 'area'),
        type: handleParams(search, 'songerType'),
        limit: 30,
        offset: 0,
        initial: handleParams(search, 'initial')
      }).then((res) => {
        setRestList(res?.artists)
        // console.log(res)
      })
    }
  }, [search])

  return (
    <div style={{ flex: '1', padding: '40px', overflow: 'hidden' }}>
      {currentTitle === '推荐歌手' ? (
        <>
          <HeadTitle
            title={currentTitle}
            isShowAll={currentTitle === '推荐歌手'}
          />
          <SettleList list={settleInlist} />
          <HeadTitle title="热门歌手" isShowAll={false} />
          <SgerList list={list} />
          <SongerTextList list={restList} />
        </>
      ) : (
        <>
          <HeadTitle title={currentTitle} isShowAll={false} />
          {!['推荐歌手', '入驻歌手'].includes(currentTitle) && (
            <InitialSelector />
          )}
          <SgerList list={restList} />
          <SongerTextList list={restList} />
        </>
      )}
    </div>
  )
}

export default memo(MainList)
