import React from "react";
import "./App.css";

import Headline from "./Headline";
import Articles from "./Articles";
import NewComponent from "./NewComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Headline />
        <Articles />
        <NewComponent />
      </header>
    </div>
  );
}

export default App;
