import { Passengers } from "../components/Pessengers";
import Search from "../components/Search"
import { Tickets } from "../components/Tickets";
import Welcome from "../components/Welcome"

const StepLayout = ({state, send}) => {
  const renderContent = () => {
    
    if(state.matches("inicial")) return <Welcome send={send}/>;
    if(state.matches("search")) return <Search send={send} state={state}/>;
    if(state.matches("tickets")) return <Tickets send={send} state={state}/>;
    if(state.matches("passengers")) return <Passengers send={send} state={state}/>;
    return null;
  }

  console.log(state.context)
  return (
    <>
    {renderContent()}
    </>
  )
}

export default StepLayout