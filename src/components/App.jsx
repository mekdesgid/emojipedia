import React from "react";
import Dict from ".//dictionary";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(Dict)}</dl>
    </div>
  );
}

export default App;
