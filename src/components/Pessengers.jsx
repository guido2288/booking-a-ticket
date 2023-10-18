import React, { useState } from 'react';

export const Passengers = ({ state, send }) => {
  const [value, changeValue] = useState('');

  const goToTicket = () => {
    send("DONE")
  }

  const onChangeInput = (e) => {
    changeValue(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    changeValue('');
  }

  return (
    <form onSubmit={submit}  className="flex flex-col bg-white min-w-[300px]  max-w-md rounded-3xl drop-shadow-lg p-5">
      <label htmlFor="name" className="block mb-2  font-medium text-m  text-gray-900">Quines van a viajar?</label>
      <input 
        id="name" 
        name="name" 
        type="text" 
        placeholder='Escribe el nombre completo' 
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 placeholder:text-gray-900 rounded-lg my-4"
        required 
        value={value} 
        onChange={onChangeInput}
      />
      <div className='flex flex-col gap-3 mt-4'>
        <button 
          className='bg-blue-700  rounded-lg px-8 py-2 hover:bg-blue-900 text-white '
          type="submit"
        >
          Agregar Pasajero
        </button>
        <button
          className=' rounded-lg px-8 py-2  hover:text-white border border-gray-800 hover:bg-gray-800 mb-6'
          type="button"
          onClick={goToTicket}
        >
          Ver mi ticket
        </button>
      </div>
    </form>
  );
};