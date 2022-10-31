import React from 'react';
import Setup from '../src/components/Setup'
// import Result from './components/result/Result';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Destination from './components/destination/Destination';
import Generalresult from './components/genral-result/Generalresult';


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element ={<Setup />}></Route>
        <Route exact path='/destination' element={<Destination />}></Route>
        <Route exact path='/result' element ={<Generalresult/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
