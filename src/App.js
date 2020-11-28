import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MyCourses from "./Pages/MyCourses";
import CoursePage from "./Pages/CoursePage";


import PrivateRoute from "./HOCs/PrivateRoute";
import AuthenticatedRoute from "./HOCs/AuthenticatedRoute";
import Explore from "./Pages/Explore";

function App() {
  return (
    <div className="w-100" style={{ minHeight: "100vh" }}>
      <Router>
        <Switch>
          <AuthenticatedRoute exact path="/" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Homepage} />
          <PrivateRoute exact path="/explore" component={Explore} />
          <PrivateRoute exact path="/explore" component={Homepage} />
          <PrivateRoute exact path="/courses/" component={MyCourses} />
          <PrivateRoute
            exact
            path="/courses/:courseId"
            component={CoursePage}
          />
          <PrivateRoute exact path="/settings" component={Homepage} />
          <AuthenticatedRoute exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
