import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './lib/components/modal/modal'

function App() {
    
    const [isShow, setIsShow] = useState(true);
    const closeModal = () => {
        setIsShow(!isShow)
    }
    return isShow ? ReactDOM.createPortal(
        <>
            <Modal text='Your text here!' closeModal={(e) => closeModal()} />
        </>, document.body
        
    )
    :
    null
}

export default App;
