import './modal.css'
import React from 'react'
import PropTypes from 'prop-types'

function Modal({ text, closeModal }) {
  const handleClick = (e) => {
    if (e.target !== e.currentTarget) {
      return
    }
    closeModal()
  }
  return (
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
  )
}

Modal.propTypes = {
  text: PropTypes.string,
  closeModal: PropTypes.func,
}

export default Modal
