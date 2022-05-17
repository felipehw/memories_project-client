import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as api from '../api';

import IPost from '../interfaces/post';
import IDraftPost from "../interfaces/draftPost";
import { ICombinedState } from '../reducers';

interface IActionPostsFetchAll extends Action {
    type: 'FETCH_ALL',
    payload: IPost[],
}
interface IActionPostsCreate extends Action {
    type: 'CREATE',
    payload: IPost,
}

type IValidAction = IActionPostsFetchAll | IActionPostsCreate | { type: 'DUMMY' };
type IValidThunkAction = ThunkAction<Promise<void>, ICombinedState, void, IValidAction>;

const getPosts: ActionCreator<IValidThunkAction> = () => async (dispatch, getState) => {
    // I could use `ThunkAction<Promise<void>, ICombinedState, void, IActionPostsFetchAll>` instead `ValidThunkAction` for more strict definition about the valid action.
    try {
        const response = await api.fetchPosts();
        const data = response.data as IPost[];
        const action: IActionPostsFetchAll = { type: 'FETCH_ALL', payload: data };
        dispatch(action);
    } catch (error: any) {
        console.log(error.message || error);
    }
};
const createPost: ActionCreator<IValidThunkAction> = (draftPost: IDraftPost) => async (dispatch, getState) => {
    try {
        const response = await api.createPost(draftPost);
        const data = response.data as IPost;
        const action: IActionPostsCreate = { type: 'CREATE', payload: data };
        dispatch(action);
    } catch (error: any) {
        console.log(error.message || error);
    }
};

export { getPosts, createPost, type IActionPostsFetchAll , type IActionPostsCreate, type IValidAction };