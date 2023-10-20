import { useMachine } from "@xstate/react"
import bookingMachine from "../Machine/bookingMachine"
import Nav from "../components/Nav"
import StepLayout from "./StepLayout"


const BaseLayout = () => {

  const [state, send] = useMachine(bookingMachine);


  return (
    <div className="flex flex-col justify-center items-center">
      <Nav state={state} send={send}/>
      <StepLayout send={send} state={state}/>
      
    </div>
  )
}

export default BaseLayout