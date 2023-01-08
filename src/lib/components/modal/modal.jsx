import './modal.css'
import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

function Modal({ text, isShow }) {
  const [show, setIsShow] = useState(isShow)

  const closeModal = () => {
    setIsShow(!isShow)
  }

  const handleClick = (e) => {
    if (e.target !== e.currentTarget) {
      return
    }
    closeModal()
  }
  return show ? (
    <div className="modal-container" onClick={handleClick}>
      <div className="modal">
        <div className="modal-header">
          <button className="modal-header__button" onClick={closeModal}>
            X
          </button>
        </div>
        <div className="modal-text">
          <h2>{text}</h2>
        </div>
      </div>
    </div>
  ) : null
}

Modal.propTypes = {
  text: PropTypes.string,
  isShow: PropTypes.bool,
}

export default Modal
