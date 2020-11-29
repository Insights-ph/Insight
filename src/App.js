import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MyCourses from "./Pages/MyCourses";
import CoursePage from "./Pages/CoursePage";
import Explore from "./Pages/Explore";
import Profile from "./Pages/Profile";

import PrivateRoute from "./HOCs/PrivateRoute";
import AuthenticatedRoute from "./HOCs/AuthenticatedRoute";

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
          <PrivateRoute exact path="/profile/" component={Profile} />
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
