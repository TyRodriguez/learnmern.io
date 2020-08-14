import React, {Component} from 'react';
// import logo from './logo.svg';
import '../App.js';
import NavBar from '../components/NavBar'
// import LearnMernState from './components/stackblitzFrame/stackblitzFrame';
import Footer from '../components/Footer'
import IframeResizer from 'iframe-resizer-react';
import { Box, Typography, Button, IconButton } from "@material-ui/core";
import {BrowserRouter, Link, Switxh, Route} from 'react-router-dom'
import logo from '../learnmern-logo.png'

class FreeUser extends Component {
  render(){
    return (
      <div>
        <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
        <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
        <Box flexGrow={1} textAlign="right">
          <Button color="primary"><Link to="/jobs">Jobs</Link></Button>
          <Button color="primary"><Link to="/signin">Sign In</Link></Button>
        </Box>
      </Box>
      <div>
      <IframeResizer
        log
        src="https://stackblitz.com/edit/mern-blog-working?file=src%2Fpages%2FBlogCreatePost.js"
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