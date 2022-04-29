// Code repeated at client and server

interface IPost {
    title: string,
    message: string,
    creator: string,
    tags: string[],
    selectedFile: string,
    likeCount: number,
    createdAt: Date,
};

export default IPost;