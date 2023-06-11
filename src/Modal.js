import React from 'react';
import './style.css';

export default function Modal(props) {
  const { children, isOpen, closeModal } = props;

  /*
    funcion para detener la propagacion de evento click en pantalla borrrosa.
  */
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <article onClick={closeModal} className={`modal ${isOpen && 'is-open'}`}>
        <div onClick={handleClick} className="modal-container ">
          <button onClick={closeModal} className="modal-close">
            X
          </button>
          {children}
        </div>
      </article>
    </>
  );
}
