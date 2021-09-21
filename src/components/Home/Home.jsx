import React from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import PostList from "../PostList/PostList"

export default function Home() {
  return (
    <div className="Home">
      <NavBar/>
      <PostList/>
    </div>
  );
}
