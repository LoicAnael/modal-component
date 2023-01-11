import { useState } from 'react'
import React from 'react'
import Modal from './lib/components/modal/modal'

function App() {
  const [isShow, setIsShow] = useState(true)
  const closeModal = () => {
    setIsShow(!isShow)
  }

  return isShow ? (
    <Modal text="Your text here!" closeModal={() => closeModal()} />
  ) : null
}

export default App
