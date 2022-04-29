import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as api from '../api';

import IPost from '../interfaces/post';
import { ICombinedState } from '../reducers';

interface IActionPostsFetchAll extends Action {
    type: 'FETCH_ALL',
    payload: IPost[],
}

type IValidAction = IActionPostsFetchAll | { type: 'DUMMY' };
type IValidThunkAction = ThunkAction<Promise<void>, ICombinedState, void, IValidAction>;

const getPosts: ActionCreator<IValidThunkAction> = () => async (dispatch, getState) => {
    // I could use `ThunkAction<Promise<void>, ICombinedState, void, ActionPostsFetchAll>` instead `ValidThunkAction` for more strict definition about the valid action.
    try {
        const response = await api.fetchPosts();
        const data = response.data as IPost[];
        const action: IActionPostsFetchAll = {type: 'FETCH_ALL', payload: data};
        dispatch(action);
    } catch (error: any) {
        console.log(error.message || error);
    }
};

export { getPosts, type IActionPostsFetchAll , type IValidAction };