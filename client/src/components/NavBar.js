import React, { Component } from "react";
import "../App.css";
import { Box, Button } from "@material-ui/core";
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
        <Button>
          <Link to="/">LearnMern</Link>
        </Button>
        <Box flexGrow={1} textAlign="right">
          <Button color="primary">
            <Link to="/jobs">Jobs</Link>
          </Button>
          <Button color="primary">Sign Out</Button>
        </Box>
      </Box>
    );
  }
}

export default NavBar;
