import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as api from '../api';

import IPost from '../interfaces/post';
import IDraftPost from "../interfaces/draftPost";
import { ICombinedState } from '../reducers';

// Action Types

enum ActionPostsType { FETCH_ALL, CREATE, UPDATE, DELETE };

interface IActionPostsFetchAll extends Action {
    type: ActionPostsType.FETCH_ALL,
    payload: IPost[],
}
interface IActionPostsCreate extends Action {
    type: ActionPostsType.CREATE,
    payload: IPost,
}
interface IActionPostsUpdate extends Action {
    type: ActionPostsType.UPDATE,
    payload: IPost,
}
interface IActionPostsDelete extends Action {
    type: ActionPostsType.DELETE,
    payload: Pick<IPost, '_id'>,
}

type IValidAction = IActionPostsFetchAll | IActionPostsCreate | IActionPostsUpdate | IActionPostsDelete;
type IValidThunkAction<ValidAction extends IValidAction> = ThunkAction<Promise<void>, ICombinedState, void, ValidAction>;

// Action Creators

const getPosts = (): IValidThunkAction<IActionPostsFetchAll> => async (dispatch, getState) => { // TODO
    try {
        const response = await api.fetchPosts();
        dispatch({ type: ActionPostsType.FETCH_ALL, payload: (response.data as IPost[]) });
    } catch (error: any) {
        console.log(error);
    }
};
const createPost = (draftPost: IDraftPost): IValidThunkAction<IActionPostsCreate> => async (dispatch, getState) => { // TODO
    try {
        const response = await api.createPost(draftPost);
        dispatch({ type: ActionPostsType.CREATE, payload: (response.data as IPost) });
    } catch (error: any) {
        console.log(error);
    }
};
const updatePost = (id: string, updatedPost: Partial<IDraftPost>): IValidThunkAction<IActionPostsUpdate> => async (dispatch, getState) => {
    try {
        const response = await api.updatePost(id, updatedPost);
        dispatch({ type: ActionPostsType.UPDATE, payload: (response.data as IPost) });
    } catch (error: any) {
        console.log(error);
    }
};
const deletePost = (id: string): IValidThunkAction<IActionPostsDelete> => async (dispatch, getState) => {
    try {
        await api.deletePost(id);
        dispatch({ type: ActionPostsType.DELETE, payload: { _id: id } });
    } catch (error: any) {
        console.log(error);
    }
};
const likePost = (id: string): IValidThunkAction<IActionPostsUpdate> => async (dispatch, getState) => {
    try {
        const response = await api.likePost(id);
        dispatch({ type: ActionPostsType.UPDATE, payload: (response.data as IPost) });
    } catch (error: any) {
        console.log(error);
    }
};

export {
    getPosts, createPost, updatePost, deletePost, likePost,
    ActionPostsType,
    type IActionPostsFetchAll , type IActionPostsCreate, type IActionPostsUpdate, type IActionPostsDelete, type IValidAction
};