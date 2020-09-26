import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import { history } from '../common/helpers/history';
import { kanbanReducer } from './kanban';

export const rootReducer = combineReducers({
  router: connectRouter(history),
  kanban: kanbanReducer,
});
