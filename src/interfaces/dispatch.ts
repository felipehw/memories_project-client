import { ThunkDispatch } from 'redux-thunk';

import { IValidAction } from '../actions/posts';
import { ICombinedState } from '../reducers';

type IDispatch = ThunkDispatch<ICombinedState, void, IValidAction>;

export default IDispatch;