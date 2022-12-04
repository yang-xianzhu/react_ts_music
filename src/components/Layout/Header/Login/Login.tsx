import React, { memo, useState } from 'react'
import cssObj from './login.module.css'
import { Modal } from 'antd'
const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <span
        className={cssObj.login}
        onClick={() => {
          showModal()
        }}
      >
        登录
      </span>
      <Modal
        title="login"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>登录</p>
      </Modal>
    </>
  )
}

export default memo(Login)
