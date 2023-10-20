export const Tickets = ({ send, state }) => {
  const finish = () => {
    send("FINISH",{passengers:[], selectedCountry:""})
  };

  let {passengers} = state.context;

  console.log(state.context)

  return (
    <div className="flex flex-col bg-white min-w-[300px]  max-w-md rounded-3xl drop-shadow-lg p-5">
      <p  className="block mb-2  font-medium text-m text-center text-gray-900">Gracias por volar con Fly high 💚</p>

      <div id="toast-simple" className="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-900 bg-gray-50 divide-x divide-dashed rounded-lg shadow border border-gray-600 divide-gray-700 space-x">
        <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
    </svg>
    <div className="pl-4 text-sm font-normal">
      <div className="flex gap-12">
        <p className="block mb-2 text-m font-bold text-gray-900 underline">Destino:</p>  
        <p className="block mb-2 text-m font-medium text-gray-900">{state.context.selectedCountry}</p>  
      </div>
      <div className="flex flex-col">
        <p className="block mb-2 text-m font-bold text-gray-900 underline">Pasajeros:</p>  
        <ul>
        {
            passengers.map((person, id) => 
              <li className="block mb-2 text-m font-medium text-gray-900" key={id}>
                {person}
                </li>
            )
          }
        </ul>  
      </div>
      
    </div>
  </div>
      <button onClick={finish} className="bg-blue-700  rounded-lg px-12 py-2 hover:bg-blue-900 text-white mt-6">Finalizar</button>
    </div>
  );
}; 