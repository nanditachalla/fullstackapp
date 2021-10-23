import "./App.css";
//import axios from "axios";
//import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import ContactUs from "./Pages/ContactUs";
import IndPost from "./Pages/IndPost";
import CreatePost from "./Pages/createPost";
import ViewPost from "./Pages/viewPosts";
import fHome from "./Pages/fHome";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Register" exact component={Register} />
          <Route path="/Home" exact component={Home} />
          <Route path="/" exact component={fHome} />
          <Route path="/samplePage" exact component={Login} />
          <Route path="/About" exact component={About} />
          <Route path="/Profile" exact component={Profile} />
          <Route path="/ContactUs" exact component={ContactUs} />
          <Route path="/CreatePost" exact component={CreatePost} />
          <Route path="/IndPost/:email" exact component={IndPost} />
          <Route path="/viewPosts" exact component={ViewPost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
