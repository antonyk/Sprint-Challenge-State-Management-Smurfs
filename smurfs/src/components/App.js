import React from "react";
import "./App.css";

import SmurfList from './SmurfList';
import SmurfAdd from './SmurfAdd';


function App() {
  return (
    <div className="App">
      <header>
        <h1>SMURFS! 2.0 W/ Redux</h1>
      </header>
      <div className='add-item smurf'>
        <SmurfAdd />
      </div>
      <section className='list-view smurf'>
        <SmurfList />
      </section>
    </div>
  );
}

export default App;
