// Code repeated at client and server

interface IDraftPost {
    title: string,
    message: string,
    creator: string,
    tags: string[],
    selectedFile: string,
};

export default IDraftPost;