// App.js

import React, { useState } from 'react';
import './Terminal.css';

function App() {
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const handleInputChange = (e) => {
    setCurrentCommand(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter' && currentCommand.trim() !== '') {
      setCommandHistory([...commandHistory, currentCommand]);
      setCurrentCommand('');
    }
  };

  return (
    <div className="app">
      <div className="terminal">
        <div className="header"></div>
        <div className="body">
          {commandHistory.map((command, index) => (
            <p key={index}> {command}</p>
          ))}
        </div>
        <div className="input-container">
          <span>&gt;</span>
          <input
            type="text"
            value={currentCommand}
            onChange={handleInputChange}
            onKeyDown={handleEnter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
