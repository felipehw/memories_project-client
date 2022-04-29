import { CombinedState, combineReducers } from "redux";

import IPost from "../interfaces/post";
import posts from "./posts";

type ICombinedState = CombinedState<{ posts: IPost[]}>;
const reducers = combineReducers<ICombinedState>({ posts });

export { reducers as default, type ICombinedState };