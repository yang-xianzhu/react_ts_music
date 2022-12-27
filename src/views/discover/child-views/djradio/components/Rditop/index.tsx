import type { FC } from 'react'
import { memo } from 'react'
import Style from './style.module.css'
import HeadTitle from '@/components/HeadTitle'
import RecommendedMain from './components/RecommendedMain'
import ProgramList from './components/ProgramList'
const Rditop: FC = () => {
  return (
    <>
      <div className={Style['container']}>
        <div className={Style['rditop']}>
          <HeadTitle title="推荐节目" />
          <RecommendedMain />
        </div>
        <div className={Style['rditop']}>
          <HeadTitle title="节目排行榜" />
          <ProgramList />
        </div>
      </div>
    </>
  )
}

export default memo(Rditop)
