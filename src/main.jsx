import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MemoHook } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoHook />
  </React.StrictMode>,
)
