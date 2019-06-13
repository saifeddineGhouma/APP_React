import React from 'react';
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Liste from  './Components/Liste'
import Condition from './Components/Condition'
import LifeCycleExemple from './Components/LifeCycleExemple'
import './App.css';

function App() {
  return (
    <div className="App">
         <h1>  React Js </h1>
         <Liste/>
         <hr/>
         <Condition/>
                  <hr/>

         <Welcome name="saif">
         test cheldrin 
         </Welcome >
                  <hr/>
<LifeCycleExemple/>
<hr/>
        <Hello name="appp"/>
       
    </div>
  );
}

export default App;
