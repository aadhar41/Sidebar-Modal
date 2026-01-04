import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, toggleModal } = useGlobalContext();

  return (
    <div className={`
      modal-overlay ${isModalOpen ? 'show-modal' : ''}
    `}>
      <div className='modal-container'>
        <button className="close-modal-btn" onClick={toggleModal}>
          <FaTimes />
        </button>
        <h2>Modal Content</h2>
      </div>
    </div>
  );
}

export default Modal
