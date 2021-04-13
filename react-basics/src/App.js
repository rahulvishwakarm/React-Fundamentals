import ClassComponent from "./Component and Props/ClassComponent";
import ExtractingComponent from "./Component and Props/ExtractingComponent";
import FuncComponent from "./Component and Props/FuncComponent";
import ConditionalRendering1 from "./Conditional Rendering/ConditionalRendering1";
import ArgumentPassingInEvenetHandlers from "./HandlingEvents/ArgumentPassingInEvenetHandlers";
import EventHandler from "./HandlingEvents/EventHandler";
import Toogle from "./HandlingEvents/Toogle";
import JSX from "./JSX Introduction/JSX";
import RenderElement from "./Rendering Element/RenderElement";
import Rendering from './State and LifeCycle/Rendering';

function App() {

  return (
    <div className="App">

        {/* Indroducing JSX */}
        <JSX/>

        {/* Rendering the compoment */}
        <RenderElement/>

        {/* Component and props */}
        <FuncComponent name="Functional Compoent"/> 

        <ClassComponent name="Class Component"/>
        
        <ExtractingComponent/>
        <Rendering/>

        {/* Event Handlers */}
        <EventHandler/>
        <Toogle/>
        <ArgumentPassingInEvenetHandlers/>

        {/* Conditional Rendering */}
        <ConditionalRendering1 isLogged={false}/>
    </div>
  );
}

export default App;
