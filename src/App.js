import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";

function App() {
  return (
    <Container
      className="d-flex text-center align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
