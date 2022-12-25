import { HashRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from '@/App'
// 重置css样式
import '@/styles/common.css'
import 'antd/dist/reset.css'
import '@/styles/reset.css'
// 主题样式
import '@/styles/theme.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Router>
    <App />
  </Router>
)
