
import { useMachine } from "@xstate/react"
import bookingMachine from "../Machine/bookingMachine"


const BaseLayout = () => {

  const [state, send] = useMachine(bookingMachine)

  console.log(state)

  return (
    <div>BaseLayout</div>
  )
}

export default BaseLayout