import React from 'react';
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Liste from  './Components/Liste'
import Condition from './Components/Condition'
import LifeCycleExemple from './Components/LifeCycleExemple'
import Test from './Components/Test'
import TodoListe from './Components/TodoListe'
import Controlled from './Components/Controlled '
import Api  from './Components/Api'
import FormikForm from './Components/FormikForm'
import './App.css';

function App() {
  return (
    <div className="App">
         <h1>  React Js </h1>

<FormikForm/>
         <hr/>

         <Api/>

         <hr/>
         <TodoListe/>
         <hr/>
         <Controlled/>
         <hr/>
         <Test/>
         <hr/>
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
