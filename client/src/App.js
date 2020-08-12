import React from "react";
// import { Controlled as CodeMirror } from "react-codemirror2";
// import axios from "axios";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Jobs from "./pages/Jobs.js"
import FreeUser from "./pages/FreeUser.js"
import SignIn from "./pages/SignIn";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/jobs">
            <Jobs />
          </Route>
          <Route exact path="/free">
            <FreeUser />
          </Route>
          <Route exact path="/signin">
            <FreeUser />
          </Route>
          <Route exact path="/signout">
            <FreeUser />
          </Route>
        </Switch>
      </div>
    </Router>
    
  )
}

export default App