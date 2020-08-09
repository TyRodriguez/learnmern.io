import React, {Component} from 'react';
// import logo from './logo.svg';
import '../App.js';
import NavBar from '../components/NavBar'
import Iframe from '../components/iframe';
// import LearnMernState from './components/stackblitzFrame/stackblitzFrame';
import IframeResizer from 'iframe-resizer-react';
import Tabs from '../components/Tabs'
import Footer from '../components/Footer'


function Home() {
  return (
    <div className="App">
      <NavBar className="Nav"/>
      <Tabs />
      <Footer />
      
    </div>
  );
}


export default Home;