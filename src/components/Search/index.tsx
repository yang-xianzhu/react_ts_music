import { memo } from 'react'
import cssObj from './index.module.css'
const Search = () => (
  <>
    <div className={cssObj['search-box']}>
      <input
        type="text"
        className={cssObj.search}
        placeholder="音乐/视频/电台/用户"
      />
    </div>
  </>
)

export default memo(Search)
