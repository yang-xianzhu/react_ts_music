import { FC, memo } from 'react'
import type { IProps } from './type'
import Style from './style.module.css'

const HeadTitle: FC<IProps> = ({
  title,
  list,
  handleItem = () => {},
  currentItem
}) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          height: '40px',
          marginTop: '30px',
          borderBottom: '2px solid var(--theme-color)'
        }}
      >
        <h3
          className="underline"
          style={{
            fontSize: '24px',
            fontWeight: 'normal'
          }}
        >
          {title}
        </h3>
        <ul className={Style['list']}>
          {list.map((v, idx: number) => (
            <li
              key={idx}
              className={`underline ${
                currentItem === v.value ? Style['active'] : ''
              }`}
              onClick={() => {
                handleItem(v)
              }}
            >
              {v.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default memo(HeadTitle)
