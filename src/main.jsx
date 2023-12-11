import React from "react";
import ReactDOM from "react-dom/client";
import "materialize-css/dist/css/materialize.css"
import App from "./MovieDB/App";

 const Main=()=>{
   
      return <App/>
   }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Main/>)