import { createAsyncThunk } from '@reduxjs/toolkit';

import { createGetThunkActionType } from '../../common/helpers/createGetThunkActionType';
import {
  createStageAction,
  createTaskAction,
  moveStageAction,
  moveTaskAction,
} from './actions';
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

const getThunkActionType = createGetThunkActionType(KANBAN_ACTION_PREFIX);

export const moveTaskThunk = createAsyncThunk(
  `${getThunkActionType(MOVE_TASK)}`,
  (payload: MoveTaskPayload, { dispatch }) => {
    dispatch(moveTaskAction(payload));
    try {
      // TODO: update backend
    } catch (error) {
      // TODO: fallback UI
    } finally {
      // TODO: someone logic if need
    }
  },
);

export const moveStageThunk = createAsyncThunk(
  `${getThunkActionType(MOVE_STAGE)}`,
  (payload: MoveStagePayload, { dispatch }) => {
    dispatch(moveStageAction(payload));
    try {
      // TODO: update backend
    } catch (error) {
      // TODO: fallback UI
    } finally {
      // TODO: someone logic if need
    }
  },
);

export const createTaskThunk = createAsyncThunk(
  `${getThunkActionType(CREATE_TASK)}`,
  (payload: CreateTaskPayload, { dispatch }) => {
    dispatch(createTaskAction(payload));
    try {
      // TODO: update backend
      // TODO: update task id on client
    } catch (error) {
      // TODO: fallback UI
    } finally {
      // TODO: someone logic if need
    }
  },
);

export const createStageThunk = createAsyncThunk(
  `${getThunkActionType(CREATE_STAGE)}`,
  (payload: CreateStagePayload, { dispatch }) => {
    dispatch(createStageAction(payload));
    try {
      // TODO: update backend
      // TODO: update stage id on client
    } catch (error) {
      // TODO: fallback UI
    } finally {
      // TODO: someone logic if need
    }
  },
);
