import React from "react";
import "../App.css";
import { Box, Typography, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function NavBar(){
  return (
    <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
      <Typography>LearnMern</Typography>
      <Box flexGrow={1} textAlign="right">
        <Button color="primary">Jobs</Button>
        <Button color="primary">Account</Button>
        <Button color="primary">Sign Out</Button>
      </Box>
    </Box>
  );
}

export default NavBar
