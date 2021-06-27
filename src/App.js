import React from 'react'
import GlobalStyles from './GlobalStyles';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import pricing from './pages/pricing';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import Dropdown from './components/dropDown/Dropdown';
import ProdSection from './components/ProductSection/ProdSection';

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const toggle = ()=>{
    setIsOpen(!isOpen)
  }

  const Switch = ()=>{
    setIsClicked(!isClicked)
  }

  const Remover =()=>{
    setIsClicked(false)
    setIsOpen(false)
  }

  return (
    <>
      <GlobalStyles/>
      <Navbar Switch={Switch} toggle={toggle} Remover={Remover}/>
      <Dropdown isOpen={isOpen} toggle={toggle} Switch={Switch}/>
      <ProdSection Switch={Switch} isClicked={isClicked}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/pricing" component={pricing}/>
    </>
  );
}

export default App;