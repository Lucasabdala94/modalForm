import * as React from 'react';
import './style.css';
import Modal from './Modal';
import useModal from './../hooks/useModal';
import FormAdd from './form/FormAdd';

export default function App() {
  const [isOpenAddAlarm, openAddAlarm, closeAddAlarm] = useModal(false);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <div className="contenedorAgregarAlarma">
        <h3>Agregar Trabajo</h3>
        <button onClick={openAddAlarm}>Agregar</button>
      </div>
      <Modal isOpen={isOpenAddAlarm} closeModal={closeAddAlarm}>
        <h2>Titulo modal 1</h2>
        <FormAdd />
      </Modal>
    </div>
  );
}
