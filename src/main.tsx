import { createRoot } from 'react-dom/client'
import React from 'react'
import Root from './Root'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
