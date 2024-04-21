import { useState } from "react";
import { Accordion } from "./components/Accordion/Accordion";
import { OnOff } from "./components/OnOff/OnOff";
import { Raiting, RaitingValueType } from "./components/Raiting/Raiting";
import { UncontrolledRaiting } from "./components/Raiting/UncontrolledRaiting";
import { UnAccordion } from "./components/UnAccordion/UnAccordion";

function App() {

  let [raitingValue, setRaitingValue] = useState<RaitingValueType>(4)
  let [accordionCollapsed, setAccordionCollapsed] = useState(false)
  
    return (
      <div className="App">
        <Accordion titleValue="Menu 1" collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
        -------------------------
        <Raiting value={raitingValue} onClick={setRaitingValue}/>
        -------------------------
        <UncontrolledRaiting />
        -------------------------
        <OnOff />
        -------------------------
        <UnAccordion titleValue="Menu 1"/>
        <UnAccordion titleValue="Menu 2"/>
      </div>
    );
}

export default App;