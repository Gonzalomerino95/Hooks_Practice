import React, { useState, useEffect } from "react";
import "./PostList.css";
import { Link } from "react-router-dom";
import { getPosts } from "../../services/GetPosts";

export default function PostList() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response);
    });
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {posts && posts.map ? (
        posts.map((post) => {
          return (
            <div className="card" style={{width: "18rem"}} key={post.id}>
              <div className="card-body">
                <h4>{post.title}</h4>
                <p className="card-text">{post.body}</p>
                <Link to={`/posts/${post.id}`}>Check out more details!</Link>
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
