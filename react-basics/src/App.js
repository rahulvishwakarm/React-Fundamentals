import ClassComponent from "./Component and Props/ClassComponent";
import ExtractingComponent from "./Component and Props/ExtractingComponent";
import FuncComponent from "./Component and Props/FuncComponent";
import EventHandler from "./HandlingEvents/EventHandler";
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
    </div>
  );
}

export default App;
