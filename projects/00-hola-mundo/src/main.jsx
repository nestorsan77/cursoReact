import React from 'react' // ← ESTO ES LO QUE FALTA
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'
import './App.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <App />
)

