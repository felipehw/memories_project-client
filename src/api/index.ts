import axios from "axios";
import IDraftPost from "../interfaces/draftPost";

const URL = 'http://localhost:5000/posts';

const fetchPosts = () => axios.get(URL);
const createPost = (newPost: IDraftPost) => axios.post(URL, newPost);
const updatePost = (id: string, updatedPost: Partial<IDraftPost>) => {
    const config = { headers: { 'Content-Type': 'application/merge-patch+json' }};
    return axios.patch(`${URL}/${id}`, updatedPost, config);
};

export { fetchPosts, createPost, updatePost };