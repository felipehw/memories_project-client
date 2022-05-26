// Code repeated at client and server

import IDraftPost from "./draftPost";

interface IPost extends IDraftPost {
    _id: string, // It isn't present in the server interface declaration
    likeCount: number,
    createdAt: Date,
};

export default IPost;