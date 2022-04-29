import axios from "axios";

const URL = 'http://localhost:5000/posts';

const fetchPosts = () => axios.get(URL);

export { fetchPosts };