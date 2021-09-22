import "./App.css";
import React, {useContext} from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails"
import { ThemeContext } from "./contexts/ThemeContext.jsx";

function App() {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div  className={darkMode ? "App__dark" : "App__light"} >
      <Route path="/" exact component={Home} />
      <Switch>
        <Route path="/posts/:postId" component={PostDetails}></Route>
      </Switch>
    </div>
  );
}

export default App;
