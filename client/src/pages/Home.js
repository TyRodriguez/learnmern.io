import React, { Component } from "react";
// import logo from './logo.svg';
import "../App.js";
import NavBar from "../components/NavBar";
import Iframe from "../components/iframe";
// import LearnMernState from './components/stackblitzFrame/stackblitzFrame';
import Tabs from "../components/Tabs";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar className="Nav" />
        <Tabs />
      </div>
    );
  }
}
// function Home() {
//   return (
//     <div>
//       <NavBar className="Nav"/>
//       <Tabs />
//       <Footer />

//     </div>
//   );
// }

export default Home;
