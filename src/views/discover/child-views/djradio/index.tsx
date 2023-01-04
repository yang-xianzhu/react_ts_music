import { FC, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import WithLayoutWrap from '../hooks/WithLayoutWrap'
import CateList from './components/CateList'
import Rditop from './components/Rditop'
import Rdimore from './components/Rdimore'
import ExcellentDj from './components/ExcellentDj'
import DjList from './components/DjList'
import { transitionUrlParams } from '@/utils'

const Djradio: FC = () => {
  const search = useLocation().search

  const isShowRdimore = useMemo(() => {
    const type = transitionUrlParams(search, 'type')
    return !type
  }, [search])

  const currentId = useMemo(() => {
    const id = transitionUrlParams(search, 'id')
    return id ? Number(id) : undefined
  }, [search])

  return (
    <>
      <WithLayoutWrap>
        <div
          className="border-left border-right"
          style={{
            padding: '40px'
          }}
        >
          <CateList />
          <Rditop />
          {/* 电台部分 */}
          {isShowRdimore ? (
            // {/* 音乐推荐-电台 */}
            <div
              style={{
                marginTop: '30px'
              }}
            >
              <Rdimore title="音乐推荐" type={2} />
              {/* 生活-电台 */}
              <Rdimore
                title="生活"
                type={6}
                style={{
                  marginTop: '30px'
                }}
              />
              {/* 情感-电台 */}
              <Rdimore
                title="情感"
                type={3}
                style={{
                  marginTop: '30px'
                }}
              />
              {/* 创作翻唱-电台 */}
              <Rdimore
                title="创作翻唱"
                type={2001}
                style={{
                  marginTop: '30px'
                }}
              />
              {/* 知识-电台 */}
              <Rdimore
                title="知识"
                type={11}
                style={{
                  marginTop: '30px'
                }}
              />
            </div>
          ) : (
            <>
              <div
                style={{
                  marginTop: '30px'
                }}
              >
                {/* 优秀电台 */}
                <ExcellentDj currentId={currentId} />
                {/* 电台排行榜 */}
                <DjList currentId={currentId} />
              </div>
            </>
          )}
        </div>
      </WithLayoutWrap>
    </>
  )
}

export default Djradio
