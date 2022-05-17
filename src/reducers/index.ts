import { CombinedState, combineReducers } from "redux";

import posts, { IPostsState } from "./posts";

type ICombinedState = CombinedState<{ posts: IPostsState}>;
const reducers = combineReducers<ICombinedState>({ posts });

export { reducers as default, type ICombinedState };