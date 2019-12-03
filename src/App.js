import React from 'react';
import './App.css';

import Headline from './Headline'
import Articles from './Articles'

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<Headline />
        <Articles />
      </header>
    </div>
  );
}

export default App;
