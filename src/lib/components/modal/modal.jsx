import './modal.css'
import React from 'react'
import PropTypes from 'prop-types'

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

Modal.propTypes = {
  text: PropTypes.string,
  closeModal: PropTypes.function,
}

export default Modal
