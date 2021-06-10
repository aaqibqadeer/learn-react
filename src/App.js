import HelloWorld from './components/HelloWorld'
import GreetUser from './components/GreetUser'
import GreetUsers from "./components/GreetUsers";
import FarewellUser from "./components/FarewellUser";
import DateTime from './components/DateTime';
import CustomEvent from './components/CustomEvent';
import ConditionalRendering from './components/ConditionalRendering';
import ListIteration from './components/ListIteration';
import InputForm from './components/forms/InputForm';
import LifecycleMethod from './components/LifecycleMethod';
import RouterComponent from './components/routes/Router';
import Button from './components/styled-component/Button';
import ParentComponent from './components/context/ParentComponent';
import React from 'react';

var a = 1; 
export const ThemeContext = React.createContext("dark"); 

function App() {


  return (
    <div className="App">
      {/* <button type="button" onClick={add}>Add</button> */}
      <button type="button">Remove</button>
      <HelloWorld/>
      <GreetUser/>
      <GreetUsers name="Aaqib"/>
      <FarewellUser name="Aaqib"/>
      <DateTime/>
      <CustomEvent/>
      <ConditionalRendering inline="false" condition="true"/>
      <ListIteration/>
      <InputForm/>
      <LifecycleMethod value={a}/>
      <RouterComponent/>
      <hr/>
      <Button/>
      <hr/>
      <ThemeContext.Provider value="dark-brown">
        <ParentComponent/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
