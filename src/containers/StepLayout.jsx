import { Passengers } from "../components/Pessengers";
import Search from "../components/Search"
import { Tickets } from "../components/Tickets";
import Welcome from "../components/Welcome"

const StepLayout = ({state, send}) => {
  const renderContent = () => {
    
    if(state.matches("inicial")) return <Welcome send={send}/>;
    if(state.matches("search")) return <Search send={send}/>;
    if(state.matches("tickets")) return <Tickets send={send}/>;
    if(state.matches("passengers")) return <Passengers send={send}/>;
    return null;
  }


  return (
    <>
    {renderContent()}
    </>
  )
}

export default StepLayout