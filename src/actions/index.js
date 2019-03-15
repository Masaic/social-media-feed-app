import { ADD_POST } from "./types";
import { addPostService } from "../apis/postService"

export const addPost = (post) => {
    addPostService();
    return {
        type: ADD_POST,
        playload: post
    }
}