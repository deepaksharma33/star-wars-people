import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import type { AnyAction, Dispatch, Store } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

export const store: Store<any, AnyAction> & {
  dispatch: Dispatch
} = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
