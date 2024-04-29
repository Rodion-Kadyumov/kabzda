import { useState } from "react";
import { Accordion } from "./components/kabzda 09 - callbacks/Accordion/Accordion";
import { OnOff } from "./components/kabzda 09 - callbacks/OnOff/OnOff";
import { Raiting, RaitingValueType } from "./components/kabzda 09 - callbacks/Raiting/Raiting";
import { UncontrolledRaiting } from "./components/kabzda 09 - callbacks/Raiting/UncontrolledRaiting";
import { UnAccordion } from "./components/kabzda 09 - callbacks/Accordion/UnAccordion";

function App() {

  let [raitingValue, setRaitingValue] = useState<RaitingValueType>(4)
  let [accordionCollapsed, setAccordionCollapsed] = useState(false)
  let [switchOn, setSwitchOn] = useState<boolean>(false)
  
    return (
      <div className="App">
        <Accordion titleValue="Menu 1"
                  collapsed={accordionCollapsed}
                  onChange={() => setAccordionCollapsed(!accordionCollapsed)} />
        -------------------------
        <Raiting value={raitingValue}
                onClick={setRaitingValue} />
        -------------------------
        <UncontrolledRaiting />
        -------------------------
        <OnOff on={switchOn} onChange={ setSwitchOn }/>
        -------------------------
        <UnAccordion titleValue="Menu 1"/>
        <UnAccordion titleValue="Menu 2"/>
      </div>
    );
}

export default App;