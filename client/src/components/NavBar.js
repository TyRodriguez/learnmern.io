import React, { Component } from "react";
import "../App.css";
import { Box, Typography, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import {BrowserRouter, Link, Switxh, Route} from 'react-router-dom'


class NavBar extends React.Component {
  render() {
    return (
      <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
        <Button><Link to="/">LearnMern</Link></Button>
        <Box flexGrow={1} textAlign="right">
          <Button color="primary"><Link to="/jobs">Jobs</Link></Button>
          <Button color="primary">Sign Out</Button>
        </Box>
      </Box>
    );
  }
}

export default NavBar

