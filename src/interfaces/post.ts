// Code repeated at client and server

interface IPost {
    _id: string, // It isn't present in the server interface declaration
    title: string,
    message: string,
    creator: string,
    tags: string[],
    selectedFile: string,
    likeCount: number,
    createdAt: Date,
};

export default IPost;