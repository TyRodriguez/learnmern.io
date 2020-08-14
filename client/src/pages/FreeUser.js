import React, { Component } from "react";
// import logo from './logo.svg';
import "../App.js";
// import LearnMernState from './components/stackblitzFrame/stackblitzFrame';
import IframeResizer from "iframe-resizer-react";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from '../learnmern-logo.png';

class FreeUser extends Component {
  render() {
    return (
      <div>
        <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
        <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
          <Box flexGrow={1} textAlign="right">
            <Button color="primary">
              <Link to="/members">More Apps</Link>
            </Button>
            <Button color="primary">
              <Link to="/signin">Sign In</Link>
            </Button>
          </Box>
        </Box>
        <div>
          <IframeResizer
            log
            src="https://stackblitz.com/edit/mern-expamle-4?embed=1&file=index.js"
            style={{
              width: "95vw",
              height: "80vh",
              position: "relative",
              overflow: "hidden"
            }}
          />
        </div>
      </div>
    );
  }
}

export default FreeUser;
