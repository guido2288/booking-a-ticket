import { useEffect, useState } from "react";

const Search = ({ state, send }) => {
    const [flight, setFlight] = useState('');
    const [options, setOptions] = useState([])

    const goToPassengers = () => {
      send("CONTINUE", {selectedCountry: flight})
    }

    const handleSelectChange = (event) => {
        setFlight(event.target.value);
    };



    useEffect(() => {
      const url = 'https://restcountries.com/v3.1/region/ame';

      const fetchData = async() => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          return setOptions(json)
        } catch (error) {
          console.log("error", error)
        }
      };

      fetchData()

    }, [])
    
  return (
    <div className="flex flex-col bg-white min-w-[300px]  max-w-md rounded-3xl drop-shadow-lg p-5">
        <label htmlFor="id" className="block mb-2 text-m font-medium text-gray-900 text-center">A donde quieres viajar?</label>
        <select value={flight} id="country" onChange={handleSelectChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ">
            <option value="" disabled defaultValue>Escoge un País</option>
            {options.map((option, idx) => <option value={option.translations.spa.common} key={idx}>{option.translations.spa.common}</option>)}
        </select>
        <button onClick={goToPassengers} disabled={flight === ''} className="bg-blue-700 mt-4 rounded-lg px-12 py-2 hover:bg-blue-900 text-white mb-6">Continuar</button>
    </div>
  )
}

export default Search