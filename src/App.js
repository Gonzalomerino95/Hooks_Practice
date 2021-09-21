import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails"

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Switch>
        <Route path="/posts/:postId" component={PostDetails}></Route>
      </Switch>
    </div>
  );
}

export default App;
