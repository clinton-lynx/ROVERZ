import React from 'react';
import './assets/styles/main.scss';
import Items from './components/items/Items';
import Mainheader from './components/mainheader/Mainheader';
import Places from './components/places/Places';
import Ads from './components/ads/Ads';
import Banner from './components/banner/Banner';
import Result from './components/result/Result';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Mainheader />
       <Items />
       <Banner />
       <Places />
       <Ads />
       <Result />
       <Footer />
    </div>
  );
}

export default App;
