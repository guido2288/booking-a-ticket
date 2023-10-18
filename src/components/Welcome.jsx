
const Welcome = ({send}) => {

  const startBooking = () => {
    send("START");
  }

  return (
    <div className="flex flex-col items-center">
      <img src="../public/images/avion.png" alt="avion.png" className="w-[300px] h-[300px]"/>
      <h2 className="text-6xl text-white font-bold px-4 mt-6 text-center">Nos Vamos de Viaje</h2>
      <p className="my-4 px-4 text-lg text-center text-slate-500">Vienes?</p>
      <button className="bg-white rounded-lg px-12 py-2 hover:bg-slate-400 text-slate-800 mb-6" onClick={startBooking}>Comenzar</button>
    </div>
  )
}

export default Welcome