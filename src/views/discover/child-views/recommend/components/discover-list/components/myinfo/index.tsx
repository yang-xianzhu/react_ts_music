import { memo } from 'react'
import { message } from 'antd'
import MyInfoStyle from './style.module.css'
function MyInfo() {
  return (
    <>
      <div className={MyInfoStyle['my-info']}>
        <p style={{ marginBottom: '8px' }}>
          登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
        </p>
        <span
          onClick={() => {
            message.success('登录个屁！')
          }}
        >
          用户登录
        </span>
      </div>
    </>
  )
}

export default memo(MyInfo)
