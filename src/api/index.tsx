import axios from "axios";
import IDraftPost from "../interfaces/draftPost";

const URL = 'http://localhost:5000/posts';

const fetchPosts = () => axios.get(URL);
const createPost = (newPost: IDraftPost) => axios.post(URL, newPost);

export { fetchPosts, createPost };