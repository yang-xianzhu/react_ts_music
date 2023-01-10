import { FC, memo, useMemo } from 'react'
import { useLocation, Link } from 'react-router-dom'
import HeadTitle from '@/components/HeadTitle'
import { transitionUrlParams } from '@/utils'

const MainList: FC = () => {
  const search = useLocation().search

  const currentTitle = useMemo(
    () => decodeURIComponent(transitionUrlParams(search, 'text') as string),
    [search]
  )

  return (
    <div style={{ flex: '1', padding: '40px', overflow: 'hidden' }}>
      <HeadTitle title={currentTitle} isShowAll={currentTitle === '推荐歌手'} />
    </div>
  )
}

export default memo(MainList)
