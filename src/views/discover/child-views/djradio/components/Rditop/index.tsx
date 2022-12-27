import { FC, useMemo } from 'react'
import { memo } from 'react'
import Style from './style.module.css'
import HeadTitle from '@/components/HeadTitle'
import RecommendedMain from './components/RecommendedMain'
import ProgramList from './components/ProgramList'
import { useNavigate, useLocation } from 'react-router-dom'
import { transitionUrlParams } from '@/utils'

const Rditop: FC = () => {
  const push = useNavigate()
  const { search } = useLocation()
  const isShow = useMemo(() => {
    const type = transitionUrlParams(search, 'type')
    return !(type === 'category')
  }, [search])
  return (
    <>
      {isShow ? (
        <div className={Style['container']}>
          <div className={Style['rditop']}>
            <HeadTitle
              title="推荐节目"
              onClick={() => {
                push('/discover/djradio/recommend')
              }}
            />
            <RecommendedMain />
          </div>
          <div className={Style['rditop']}>
            <HeadTitle
              title="节目排行榜"
              onClick={() => {
                push('/discover/djradio/rank')
              }}
            />
            <ProgramList />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default memo(Rditop)
