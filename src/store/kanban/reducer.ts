import { createReducer } from '@reduxjs/toolkit';

import { getUniqueId } from '../../common/helpers/getUniqueId';
import { ReducerStatus } from '../types';
import {
  createStageAction,
  createTaskAction,
  moveStageAction,
  moveTaskAction,
} from './actions';
import { KanbanState } from './types';

const kanbanInitialState: KanbanState = {
  status: ReducerStatus.Idle,
  tasks: {
    byIds: {},
    ids: [],
  },
  stages: {
    byIds: {},
    ids: [],
  },
  stagesOrder: [],
};

export const reducer = createReducer(kanbanInitialState, (builder) => {
  builder.addCase(moveTaskAction, (state, action) => {
    const { sourceLocation, destinationLocation } = action.payload;

    const sourceStage = state.stages.byIds[sourceLocation.stageId];
    const destinationStage = state.stages.byIds[destinationLocation.stageId];

    if (sourceStage && destinationStage) {
      const [movedTaskId] = sourceStage.tasksOrder.splice(
        sourceLocation.index,
        1,
      );
      destinationStage.tasksOrder.splice(
        destinationLocation.index,
        0,
        movedTaskId,
      );
    }
  });
  builder.addCase(moveStageAction, (state, action) => {
    const { stagesOrder } = state;
    const { sourceIndex, destinationIndex } = action.payload;

    const [movedStageId] = stagesOrder.splice(sourceIndex, 1);
    stagesOrder.splice(destinationIndex, 0, movedStageId);
  });
  builder.addCase(createTaskAction, (state, action) => {
    const { taskTitle, stageId } = action.payload;

    const newTaskId = getUniqueId();

    state.tasks.byIds[newTaskId] = {
      id: newTaskId,
      title: taskTitle,
    };
    state.tasks.ids.push(newTaskId);
    state.stages.byIds[stageId].tasksOrder.push(newTaskId);
  });
  builder.addCase(createStageAction, (state, action) => {
    const { stageTitle } = action.payload;

    const newStageId = getUniqueId();

    state.stages.byIds[newStageId] = {
      id: newStageId,
      title: stageTitle,
      tasksOrder: [],
    };
    state.stagesOrder.push(newStageId);
  });
});
