import { FC, memo, SyntheticEvent, useEffect } from 'react'
import Style from './style.module.css'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import type { IList } from './type'
import { transitionUrlParams } from '@/utils'

const list: IList[] = [
  {
    title: '推荐',
    list: [
      {
        text: '推荐歌手',
        value:
          '/discover/artist?type=recommend&text=推荐歌手&songerType=-1&area=-1'
      },
      {
        text: '入驻歌手',
        value:
          '/discover/artist?type=signed&text=入驻歌手&songerType=-1&area=-1'
      }
    ]
  },
  {
    title: '华语',
    list: [
      {
        text: '华语男歌手',
        value:
          '/discover/artist?type=cat&id=1001&text=华语男歌手&songerType=1&area=7',
        songerType: '男歌手'
      },
      {
        text: '华语女歌手',
        value:
          '/discover/artist?type=cat&id=1002&text=华语女歌手&songerType=2&area=7',
        songerType: '女歌手'
      },
      {
        text: '华语组合/乐队',
        value:
          '/discover/artist?type=cat&id=1003&text=华语组合/乐队&songerType=3&area=7',
        songerType: '乐队'
      }
    ]
  },
  {
    title: '欧美',
    list: [
      {
        text: '欧美男歌手',
        value:
          '/discover/artist?type=cat&id=2001&text=欧美男歌手&songerType=1&area=96',
        songerType: '男歌手'
      },
      {
        text: '欧美女歌手',
        value:
          '/discover/artist?type=cat&id=2002&text=欧美女歌手&songerType=2&area=96',
        songerType: '女歌手'
      },
      {
        text: '欧美组合/乐队',
        value:
          '/discover/artist?type=cat&id=2003&text=欧美组合/乐队&songerType=3&area=96',
        songerType: '乐队'
      }
    ]
  },
  {
    title: '日本',
    list: [
      {
        text: '日本男歌手',
        value:
          '/discover/artist?type=cat&id=6001&text=日本男歌手&songerType=1&area=8',
        songerType: '男歌手'
      },
      {
        text: '日本女歌手',
        value:
          '/discover/artist?type=cat&id=6002&text=日本女歌手&songerType=2&area=8',
        songerType: '女歌手'
      },
      {
        text: '日本组合/乐队',
        value:
          '/discover/artist?type=cat&id=6003&text=日本组合/乐队&songerType=3&area=8',
        songerType: '乐队'
      }
    ]
  },
  {
    title: '韩国',
    list: [
      {
        text: '韩国男歌手',
        value:
          '/discover/artist?type=cat&id=7001&text=韩国男歌手&songerType=1&area=16',
        songerType: '男歌手'
      },
      {
        text: '韩国女歌手',
        value:
          '/discover/artist?type=cat&id=7002&text=韩国女歌手&songerType=2&area=16',
        songerType: '女歌手'
      },
      {
        text: '韩国组合/乐队',
        value:
          '/discover/artist?type=cat&id=7003&text=韩国组合/乐队&songerType=3&area=16',
        songerType: '乐队'
      }
    ]
  },
  {
    title: '其他',
    list: [
      {
        text: '其他男歌手',
        value:
          '/discover/artist?type=cat&id=4001&text=其他男歌手&songerType=1&area=0',
        songerType: '男歌手'
      },
      {
        text: '其他女歌手',
        value:
          '/discover/artist?type=cat&id=4002&text=其他女歌手&songerType=2&area=0',
        songerType: '女歌手'
      },
      {
        text: '其他组合/乐队',
        value:
          '/discover/artist?type=cat&id=4003&text=其他组合/乐队&songerType=3&area=0',
        songerType: '乐队'
      }
    ]
  }
]

const FilterList: FC = () => {
  const search = useLocation().search
  const push = useNavigate()

  useEffect(() => {
    if (
      decodeURIComponent(transitionUrlParams(search, 'text') as string) ===
      'undefined'
    ) {
      push('/discover/artist?type=recommend&text=推荐歌手')
    }
  }, [])

  function handleValue(val: string) {
    return decodeURIComponent(transitionUrlParams(search, 'text') as string)
  }

  function handleList(value: string, e: SyntheticEvent) {
    // console.log(value)
    // console.log(e)
  }

  return (
    <>
      <div className={`border-right border-left ${Style['filter-container']}`}>
        {list.map((v, idx: number) => (
          <div key={idx} className={Style['item']}>
            <h2 className={Style['title']}>{v.title}</h2>
            <ol className={Style['nav']}>
              {v.list.map((item, index: number) => (
                <li key={index}>
                  <Link
                    to={item.value}
                    onClick={(e) => handleList(item.value, e)}
                    className={`yxz-singer underline ${
                      handleValue(item.value) === item.text
                        ? Style['active']
                        : ''
                    }`}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </>
  )
}

export default memo(FilterList)
