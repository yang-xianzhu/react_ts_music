import { memo } from 'react'
import cssObj from './login.module.css'
const Login = () => <a className={cssObj.login}>登录</a>

export default memo(Login)
