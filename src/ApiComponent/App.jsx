import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieLibrary from './ApiFeature';
import SecondPage from './Second';
const App = () => {
  return (
    <Router>
        <Routes>

      <Route exact path="/" Component={MovieLibrary} />
      <Route path="/second-page" Component={SecondPage} />
        </Routes>
    </Router>
  );
};

export default App;
