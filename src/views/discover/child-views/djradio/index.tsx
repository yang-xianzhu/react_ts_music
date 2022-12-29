import { FC, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import WithLayoutWrap from '../hooks/WithLayoutWrap'
import CateList from './components/CateList'
import Rditop from './components/Rditop'
import Rdimore from './components/Rdimore'
import { transitionUrlParams } from '@/utils'

const Djradio: FC = () => {
  const push = useLocation()
  const search = useLocation().search

  const isShowRdimore = useMemo(() => {
    const type = transitionUrlParams(search, 'type')
    return !type
  }, [search])

  // console.log('type', isShowRdimore)
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
            <>显示优秀电台+电台排行榜</>
          )}
        </div>
      </WithLayoutWrap>
    </>
  )
}

export default Djradio
