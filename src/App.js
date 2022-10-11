import React from 'react';
import './assets/styles/main.scss';
import Items from './components/items/Items';
import Mainheader from './components/mainheader/Mainheader';


function App() {
  return (
    <div className="App">
       <Mainheader />
       <Items />
    </div>
  );
}

export default App;
