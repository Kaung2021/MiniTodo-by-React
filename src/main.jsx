import React from "react";
import ReactDOM from "react-dom/client";
 import Parent from "./projects/Parent";
import Formvalidation from './projects/Formvalidation'
 const Main=()=>{
   
      return <div>
             <Formvalidation/>
      </div>
   }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Main/>)