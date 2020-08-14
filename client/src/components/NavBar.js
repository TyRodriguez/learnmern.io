import React, { Component } from "react";
import "../App.css";
import { Box, Button } from "@material-ui/core";
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { Link } from "react-router-dom";
import logo from '../learnmern-logo.png'

class NavBar extends Component {
  render() {
    return (
      <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
        <Link to="/member"><img className="logo" src={logo} alt="Logo" /></Link>
        <Box flexGrow={1} textAlign="right">
          <Button to="/signin" color="primary">Sign Out</Button>
        </Box>
      </Box>
    );
  }
}

export default NavBar;
