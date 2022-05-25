import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as api from '../api';

import IPost from '../interfaces/post';
import IDraftPost from "../interfaces/draftPost";
import { ICombinedState } from '../reducers';

// Action Types

interface IActionPostsFetchAll extends Action {
    type: 'FETCH_ALL',
    payload: IPost[],
}
interface IActionPostsCreate extends Action {
    type: 'CREATE',
    payload: IPost,
}
interface IActionPostsUpdate extends Action {
    type: 'UPDATE',
    payload: IPost,
}

type IValidAction = IActionPostsFetchAll | IActionPostsCreate | IActionPostsUpdate;
type IValidThunkAction<ValidAction extends IValidAction> = ThunkAction<Promise<void>, ICombinedState, void, ValidAction>;

// Action Creators

const getPosts = (): IValidThunkAction<IActionPostsFetchAll> => async (dispatch, getState) => { // TODO
    try {
        const response = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: (response.data as IPost[]) });
    } catch (error: any) {
        console.log(error);
    }
};
const createPost = (draftPost: IDraftPost): IValidThunkAction<IActionPostsCreate> => async (dispatch, getState) => { // TODO
    try {
        const response = await api.createPost(draftPost);
        dispatch({ type: 'CREATE', payload: (response.data as IPost) });
    } catch (error: any) {
        console.log(error);
    }
};
const updatePost = (id: string, updatedPost: Partial<IDraftPost>): IValidThunkAction<IActionPostsUpdate> => async (dispatch, getState) => {
    try {
        const response = await api.updatePost(id, updatedPost);
        dispatch({ type: 'UPDATE', payload: (response.data as IPost) });
    } catch (error: any) {
        console.log(error);
    }
};

export {
    getPosts, createPost, updatePost,
    type IActionPostsFetchAll , type IActionPostsCreate, type IActionPostsUpdate, type IValidAction
};