import './modal.css'
import React from 'react'

const Modal = ({ text, closeModal }) => (
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
)

export default Modal
