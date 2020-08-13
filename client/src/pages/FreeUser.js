import React, { Component } from "react";
// import logo from './logo.svg';
import "../App.js";
// import LearnMernState from './components/stackblitzFrame/stackblitzFrame';
import IframeResizer from "iframe-resizer-react";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class FreeUser extends Component {
  render() {
    return (
      <div>
        <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
          <Button>
            <Link to="/free">LearnMern</Link>
          </Button>
          <Box flexGrow={1} textAlign="right">
            <Button color="primary">
              <Link to="/jobs">Jobs</Link>
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
