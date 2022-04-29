import { Action } from 'redux';

import { IActionPostsFetchAll } from "../actions/posts";
import IPost from "../interfaces/post";

const posts = (state: IPost[] = [], action: Action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return (action as IActionPostsFetchAll).payload;
        case 'CREATE':
            return state;
        default:
            return state;
    }
};

export default posts;