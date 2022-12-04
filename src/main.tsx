import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from '@/App'
// 引入store
// import store from '@/store'
// 重置css样式
import '@/styles/reset.css'
import '@/styles/common.css'
import 'antd/dist/reset.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Router>
    <App />
  </Router>
)
