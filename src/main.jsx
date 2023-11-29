import React from "react";
import ReactDOM from "react-dom/client";
 
import TodobyReact from "./projects/TodobyReact";
 const Main=()=>{
   
      return <TodobyReact/>
   }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Main/>)