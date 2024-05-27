import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Marketplace from './pages/Marketplace';
import Competition from './pages/Competition';
import HumanResources from './pages/HumanResources';

console.log('eweasd');

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/hr" element={<HumanResources />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
