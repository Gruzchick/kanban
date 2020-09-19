import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import { history } from '../app/history';

export const rootReducer = combineReducers({
  router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>;
