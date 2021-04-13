import ClassComponent from "./Component and Props/ClassComponent";
import ExtractingComponent from "./Component and Props/ExtractingComponent";
import FuncComponent from "./Component and Props/FuncComponent";
import ConditionalRendering1 from "./Conditional Rendering/ConditionalRendering1";
import InLIneIfLogicalAndOperator from "./Conditional Rendering/InLIneIfLogicalAndOperator";
import MainElementVariable from "./Conditional Rendering/MainElementVariable";
import PreventComponentFromRendering from "./Conditional Rendering/PreventComponentFromRendering";
import InputForm from "./Form/InputForm";
import ArgumentPassingInEvenetHandlers from "./HandlingEvents/ArgumentPassingInEvenetHandlers";
import EventHandler from "./HandlingEvents/EventHandler";
import Toogle from "./HandlingEvents/Toogle";
import JSX from "./JSX Introduction/JSX";
import BasicListCompoent from "./List and Keys/BasicListCompoent";
import Keys from "./List and Keys/Keys";
import RenderingMultipleComponent from "./List and Keys/RenderingMultipleComponent";
import UsingMap from "./List and Keys/UsingMap";
import RenderElement from "./Rendering Element/RenderElement";
import Rendering from './State and LifeCycle/Rendering';

function App() {
    const message = ["React","Re: React","Re:Re"]
    const numbers = [1,2,3,4,5]
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
        <MainElementVariable/>

        {/* InlIn Logical If */}
        <InLIneIfLogicalAndOperator unreadMessage={message}/>

        {/* Prevent Component from rendering */}
        <PreventComponentFromRendering/>

        {/* List and Keys */}
        <UsingMap/>

        {/**Rendering Multiple Conponent */}
        {/* <RenderingMultipleComponent/> */} 

        {/* Basic List */}
        <BasicListCompoent numbers={numbers}/>

        {/* Keys */}
        <Keys/>

        {/* Input Form in Form */}
        <InputForm/>
    </div>
  );
}

export default App;
