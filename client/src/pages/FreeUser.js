import React, {Component} from 'react';
// import logo from './logo.svg';
import '../App.js';
import NavBar from '../components/NavBar'
// import LearnMernState from './components/stackblitzFrame/stackblitzFrame';
import Footer from '../components/Footer'
import IframeResizer from 'iframe-resizer-react';
import { Box, Typography, Button, IconButton } from "@material-ui/core";
import {BrowserRouter, Link, Switxh, Route} from 'react-router-dom'

class FreeUser extends Component {
  render(){
    return (
      <div>
        <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
        <Button><Link to="/free">LearnMern</Link></Button>
        <Box flexGrow={1} textAlign="right">
          <Button color="primary"><Link to="/jobs">Jobs</Link></Button>
          <Button color="primary"><Link to="/jobs">Sign In</Link></Button>
        </Box>
      </Box>
      <div>
      <IframeResizer
        log
        src="https://stackblitz.com/edit/mern-expamle-4?embed=1&file=index.js"
        style={{
            width: '95vw',
            height: '80vh',
            position: 'relative',
            overflow: 'hidden'}}
            />
      </div>
        <Footer />
        
      </div>
    );
  }
}

export default FreeUser;