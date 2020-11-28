import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MyCourses from "./Pages/MyCourses";
import CoursePage from "./Pages/CoursePage";

function App() {
  return (
    <div className="w-100" style={{ minHeight: "100vh" }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Homepage} />
          <Route exact path="/explore" component={Homepage} />
          <Route exact path="/courses/" component={MyCourses} />
          <Route exact path="/courses/:courseId" component={CoursePage} />
          <Route exact path="/settings" component={Homepage} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
