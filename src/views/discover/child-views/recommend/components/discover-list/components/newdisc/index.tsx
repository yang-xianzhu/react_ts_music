import { memo } from 'react'
import Header from '../../components/header'
import Runhorse from './components/runhorse'
const NewDisc = () => {
  return (
    <>
      <Header {...{ title: '新碟上架' }} />
      <Runhorse />
    </>
  )
}

export default memo(NewDisc)
