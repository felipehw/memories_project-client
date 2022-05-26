import axios from "axios";
import IDraftPost from "../interfaces/draftPost";

const URL = 'http://localhost:5000/posts';

const fetchPosts = () => axios.get(URL);
const createPost = (newPost: IDraftPost) => axios.post(URL, newPost);
const updatePost = (id: string, updatedPost: Partial<IDraftPost>) => {
    const config = { headers: { 'Content-Type': 'application/merge-patch+json' }};
    return axios.patch(`${URL}/${id}`, updatedPost, config);
};
const deletePost = (id: string) => axios.delete(`${URL}/${id}`);
const likePost = (id: string) => axios.patch(`${URL}/${id}/likePost`);

export { fetchPosts, createPost, updatePost, deletePost, likePost };