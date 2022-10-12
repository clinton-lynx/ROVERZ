import React from 'react';
import './assets/styles/main.scss';
import Items from './components/items/Items';
import Mainheader from './components/mainheader/Mainheader';
import Places from './components/places/Places';
import Ads from './components/ads/Ads';

function App() {
  return (
    <div className="App">
       <Mainheader />
       <Items />
       <Places />
       <Ads />
    </div>
  );
}

export default App;
