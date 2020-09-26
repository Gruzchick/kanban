import { createAction } from '@reduxjs/toolkit';

import { createGetActionType } from '../../common/helpers/createGetActionType';
import {
  CREATE_STAGE,
  CREATE_TASK,
  KANBAN_ACTION_PREFIX,
  MOVE_STAGE,
  MOVE_TASK,
} from './constants';
import {
  CreateStagePayload,
  CreateTaskPayload,
  MoveStagePayload,
  MoveTaskPayload,
} from './types';

export const getActionType = createGetActionType(KANBAN_ACTION_PREFIX);

export const moveTaskAction = createAction<MoveTaskPayload>(
  getActionType(MOVE_TASK),
);

export const moveStageAction = createAction<MoveStagePayload>(
  getActionType(MOVE_STAGE),
);

export const createTaskAction = createAction<CreateTaskPayload>(
  getActionType(CREATE_TASK),
);

export const createStageAction = createAction<CreateStagePayload>(
  getActionType(CREATE_STAGE),
);
