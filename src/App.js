import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MyCourses from "./Pages/MyCourses";

function App() {
  return (
    <div className="w-100" style={{ minHeight: "100vh" }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Homepage} />
          <Route path="/explore" component={Homepage} />
          <Route path="/courses" component={MyCourses} />
          <Route path="/settings" component={Homepage} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
