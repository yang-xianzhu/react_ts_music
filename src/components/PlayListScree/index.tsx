import { useEffect, useMemo, useState } from 'react'
import type { FC } from 'react'
import Style from './style.module.css'
import { getCatList } from '@/api/toplist'
import type { ISub } from './type'
import { useNavigate, useLocation } from 'react-router-dom'
import { transitionUrlParams } from '@/utils'

const PlayListScree: FC = () => {
  const push = useNavigate()
  const routeParams = useLocation().search

  const ICON_OBJ: {
    [k in string]: string
  } = {
    语种: '-20px -735px',
    风格: '0 -60px',
    场景: '0 -88px',
    情感: '0 -117px',
    主题: '0 -141px'
  }
  const decodePathName = decodeURIComponent(
    (transitionUrlParams(routeParams, 'cat') as string) || '全部'
  )
  const [isShowcateListBox, setIsShowcateListBox] = useState<boolean>(false)

  const curName = useMemo(() => decodePathName, [routeParams])
  const [list, setList] = useState<{
    [k in string]: ISub[]
  }>({})

  useEffect(() => {
    getData()
  }, [])

  function getData() {
    getCatList().then((res) => {
      // console.log('res', res)
      const typeObj: any = res.categories
      const obj: any = {}
      for (const k in typeObj) {
        obj[typeObj[k]] = []
      }

      res?.sub.forEach((v: any) => {
        for (const k in obj) {
          const keyName = typeObj[v.category]
          if (keyName === k) {
            obj[keyName].push(v)
          }
        }
      })

      setList(obj)
    })
  }

  function handleItem(name: string) {
    if (name === decodePathName) return
    push(
      `/discover/playlist?order=hot&cat=${encodeURIComponent(
        name
      )}&limit=35&offset=0`
    )
  }
  return (
    <>
      <header className={Style['header']}>
        <h2>{curName}</h2>
        <div
          className={Style['scree']}
          onClick={() => {
            setIsShowcateListBox((cur) => !cur)
          }}
        >
          <i>选择分类</i>
          <em className="yxz-icon"></em>
        </div>
        <p className={`yxz-button ${Style['tag']}`}>
          <strong className="underline">热门</strong>
        </p>
        {/* 筛选框 */}
        <div
          className={Style['cateListBox']}
          style={{
            display: isShowcateListBox ? 'block' : 'none'
          }}
        >
          <div className={Style['hd']}>
            <span
              className="yxz-button underline"
              onClick={() => {
                setIsShowcateListBox(false)
                if (decodePathName === '全部') {
                  return
                }
                push(`/discover/playlist?order=hot&cat=全部&limit=35&offset=0`)
              }}
            >
              全部风格
            </span>
          </div>

          <ul className={Style['bd']}>
            {Object.keys(list).length > 0
              ? Object.entries(list).map(
                  ([species, data]: [string, ISub[]], idx: number) => (
                    <li key={idx}>
                      <div className={Style['species']}>
                        <i
                          className="yxz-icon"
                          style={{
                            backgroundPosition: ICON_OBJ[species]
                          }}
                        ></i>
                        <strong>{species}</strong>
                      </div>
                      <ul
                        className={Style['species-list']}
                        style={{
                          paddingBottom:
                            idx === Object.keys(list).length - 1 ? '30px' : '0'
                        }}
                      >
                        {data.map((v: ISub) => (
                          <li
                            key={v.name}
                            onClick={() => {
                              setIsShowcateListBox(false)
                              handleItem(v.name)
                            }}
                          >
                            <span
                              className={`underline ${
                                v.name === decodePathName ? Style['active'] : ''
                              }`}
                            >
                              {v.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )
                )
              : null}
          </ul>
        </div>
      </header>
    </>
  )
}

export default PlayListScree
