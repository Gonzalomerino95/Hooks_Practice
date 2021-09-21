import http from "./BaseService"

export const getPosts = () => {
    return http.get("/posts");
}


export const getPost = (postId) => {
    return http.get(`/posts/${postId}`)
}

export const getComments = (postId) => {
    return http.get(`/post/${postId}/comments`)
}