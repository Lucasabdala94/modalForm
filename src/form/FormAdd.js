import React, { useState } from 'react';

export default function FormAdd() {
  const [values, setValues] = useState({
    trabajo: '',
    tension: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    // Aquí puedes usar values para enviar la información
  }

  function handleChange(e) {
    const { target } = e;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };

    // Sincroniza el estado de nuevo
    setValues(newValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="trabajo">Trabajo</label>
      <input
        id="trabajo"
        name="trabajo"
        type="text"
        value={values.trabajo}
        onChange={handleChange}
      />
      <label htmlFor="tension">Nivel de Tension</label>
      <input
        id="tension"
        name="tension"
        type="text"
        value={values.tension}
        onChange={handleChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
