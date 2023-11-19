import React from "react";

import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "../src/App.css"
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Products from "./components/Products";
import { useParams } from "react-router-dom";
import Singlecproducts from "./components/Singlecproducts";
 const App=()=>{
   return (
      <Router>
        <Navbar/>
         <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/about"  Component={About}/>
          <Route path="/contact"  Component={Contact}/>
          <Route path="/products" Component={Products}/>
          <Route path="/products/:productsId" Component={Singlecproducts}/>
          <Route path="*" Component={Error}/>
         </Routes>
      </Router>
   )
 }
  export default App