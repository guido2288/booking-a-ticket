import { useState } from "react";

const Search = ({ send }) => {
    const [flight, setFlight] = useState('');

    const goToPassengers = () => {
      send("CONTINUE", {selectedCountry: flight})
    }

    const handleSelectChange = (event) => {
        setFlight(event.target.value);
    };
    const options = ['Mexico', 'Venezuela', 'Colombia'];
  return (
    <div className="flex flex-col bg-white min-w-[300px]  max-w-md rounded-3xl drop-shadow-lg p-5">
        <label htmlFor="id" className="block mb-2 text-m font-medium text-gray-900 text-center">A donde quieres viajar?</label>
        <select value={flight} id="country" onChange={handleSelectChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ">
            <option value="" disabled defaultValue>Escoge un País</option>
            {options.map((option) => <option value={option} key={option}>{option}</option>)}
        </select>
        <button onClick={goToPassengers} disabled={flight === ''} className="bg-blue-700 mt-4 rounded-lg px-12 py-2 hover:bg-blue-900 text-white mb-6">Continuar</button>
    </div>
  )
}

export default Search