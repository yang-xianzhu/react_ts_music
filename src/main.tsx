import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/assets/css/index.less'
import 'antd/dist/reset.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Router>
    <App />
  </Router>
)
