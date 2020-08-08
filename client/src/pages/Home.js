import React, {Component} from 'react';
// import logo from './logo.svg';
import '../App.js';
import NavBar from '../components/NavBar'
import Iframe from '../components/iframe';
// import LearnMernState from './components/stackblitzFrame/stackblitzFrame';
import IframeResizer from 'iframe-resizer-react';

class Home extends Component {
    constructor(props) {
      // const iframeRef = useRef(null)
      super(props);
      this.state = {
          src: "https://stackblitz.com/edit/angular?embed=1"
      }  
  }

  
  render() {
    return (
      <div className="App">
        
        <NavBar />
        <IframeResizer

        log
        src={this.state.src}
        style={{
            width: '100vw',
            height: '80vh',
            paddingLeft: '5%',
            position: 'relative',
            overflow: 'hidden'}}
        />
      </div>
    );
  }
}
   
  
  
  export default Home;
  