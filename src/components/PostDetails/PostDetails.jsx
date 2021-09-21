import React,  { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getPost } from "../../services/GetPosts.js"
import Comments from "../Comments/Comments"
import "./PostDetails.css";

export default function PostDetails(){
    const { postId } = useParams()
    const [post, setPost] = useState(null);

    useEffect(()=>{
        getPost(postId)
        .then(post => setPost(post));
    },[postId])

    return(
        <div>
            {post ? (<div>
            <h2>{post.title}</h2>
            <h4>{post.body}</h4>
            </div>) : (<div>loading</div>)}
            <Comments/>
        </div>
    )
}