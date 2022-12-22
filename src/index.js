import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from '../src/lib/components/modal/modal'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Modal text="Your text here!" isShow={true} />
  </React.StrictMode>
)
