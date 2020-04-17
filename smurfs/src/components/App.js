import React from "react";
import "./App.css";

import SmurfList from './SmurfList';
import SmurfAdd from './SmurfAdd';


function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
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
