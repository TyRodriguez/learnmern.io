import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Iframe from './components/iframe-old.js';
import LearnMernState from './components/stackblitzFrame/stackblitzFrame';
import IframeResizer from 'iframe-resizer-react';

class Home extends Component {
    constructor(props) {
      // const iframeRef = useRef(null)
      super(props);
      this.state = {
          src: "https://stackblitz.com/edit/angular?embed=1"
      };
    
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <IframeResizer
        log
        src={this.state.src}
        style={{ width: '100vw', minWidth: '100%', height: '100vh'}}
        />
        
        <Iframe source={this.state.src} style={{width:'100%', height:'100%'}}/>
      </div>
    );
  }
  }
    
  
  
  export default Home;
  