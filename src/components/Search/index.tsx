import { memo, useState, useRef } from 'react'
import cssObj from './index.module.css'

const Search = () => {
  const [value, setValue] = useState<string>('')
  const ipt = useRef<HTMLInputElement | null>(null)
  return (
    <div className={cssObj['search-box']}>
      <input
        type="text"
        className={cssObj.search}
        placeholder="音乐/视频/电台/用户"
        value={value}
        ref={ipt}
        onChange={(e) => {
          setValue(() => e.target.value)
        }}
        onFocus={() => {
          ipt.current!.placeholder = ''
        }}
        onBlur={() => {
          ipt.current!.placeholder = '音乐/视频/电台/用户'
        }}
      />
    </div>
  )
}

export default memo(Search)
