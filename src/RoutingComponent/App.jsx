import React from 'react';
import { BrowserRouter as Router, Route, useLocation, Routes } from 'react-router-dom';
import LandingPage from './Landing';
import SecondPage from './Search';

const App = () => {

  return (
    <Router>
        <Routes>
            <Route  path ='/' exact element={LandingPage}/>
            <Route path="/secondPage" element={SecondPage}/>
        </Routes>
      </Router>
  );
};

export default App;
