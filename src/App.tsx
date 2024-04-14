import { Accordion } from "./components/Accordion/Accordion";
import { OnOff } from "./components/OnOff/OnOff";
import { Raiting } from "./components/Raiting/Raiting";

function App() {

  
    return (
      <div className="App">
        <Accordion titleValue="Menu 1" collapsed={true}/>
        <Accordion titleValue="Menu 2" collapsed={false}/>
        <Raiting value={3}/>
        <Raiting value={5}/>
        <OnOff />
      </div>
    );
}

export default App;