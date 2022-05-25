import { Action } from 'redux';

import { IActionPostsFetchAll, IActionPostsCreate, IActionPostsUpdate, IActionPostsDelete } from "../actions/posts";
import IPost from "../interfaces/post";

type IPostsState = IPost[];
const posts = (state: IPostsState = [], action: Action): IPostsState => {
    switch (action.type) {
        case 'FETCH_ALL':
            return (action as IActionPostsFetchAll).payload;
        case 'CREATE':
            // Dev opts for not get all posts again from server.
            // We assemble the new state in the client adding the new post to the older ones.
            return [...state, (action as IActionPostsCreate).payload];
        case 'UPDATE': {
            // Dev opts for not get all posts again from server.
            // We assemble the new state in the client adding the new post to the older ones.
            const updateAction = action as IActionPostsUpdate;
            const postIndex = state.findIndex((post) => post._id === updateAction.payload._id);
            if (postIndex === -1) return state;
            return [...state.slice(0, postIndex), updateAction.payload, ...state.slice(postIndex + 1)];
        }
        case 'DELETE': {
            // Dev opts for not get all posts again from server.
            // We assemble the new state in the client adding the new post to the older ones.
            const deleteAction = action as IActionPostsDelete;
            return state.filter((post) => post._id !== deleteAction.payload._id);
        }
        default:
            return state;
    }
};

export { posts as default, type IPostsState };