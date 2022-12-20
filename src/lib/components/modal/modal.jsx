import './modal.css'
import React from 'react'

const Modal = ({text, closeModal}) => (
    <div className='modal__container'>
        <div className='modal'>
            <div className='modal__header'>
                <button className='modal__header__button' onClick={closeModal}>X</button>
            </div>
            <div className='modal__text'>
                <h2>{text}</h2>
            </div>
        </div>
    </div>
)

export default Modal