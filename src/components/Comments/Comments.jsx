import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { getComments } from "../../services/GetPosts.js"

export default function Comments(){
    const { postId } = useParams() 
    const [comments, setComment] = useState(null)

    useEffect(()=>{
        getComments(postId)
        .then(comments => setComment(comments))
    }, [postId])

    console.log(comments)

    return(
        comments ? (
        <div>
            <h3>Comments:</h3>
            {comments.map((comment)=>{
                return(
                    <div key={comment.id}>
                        <h5>{comment.name}</h5>
                        <p>{comment.email}</p>
                        <p>{comment.body}</p>
                    </div>
                )
            })}
        </div>
        ) : (
        <div>Loading post comments...</div>
        )
        
    )
}