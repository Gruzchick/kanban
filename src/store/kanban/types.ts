// region reducer
import { ReducerStatus } from '../types';

export type Task = {
  id: string;
  title: string;
};

export type Stage = {
  id: string;
  title: string;
  tasksOrder: string[];
};

export type KanbanState = {
  status: ReducerStatus;
  tasks: {
    byIds: Record<string, Task>;
    ids: string[];
  };
  stages: {
    byIds: Record<string, Stage>;
    ids: string[];
  };
  stagesOrder: string[];
};
// endregion reducer

// region actions
export type MoveTaskPayload = {
  sourceLocation: {
    stageId: string;
    index: number;
  };
  destinationLocation: {
    stageId: string;
    index: number;
  };
};

export type MoveStagePayload = {
  sourceIndex: number;
  destinationIndex: number;
};

export type CreateTaskPayload = {
  taskTitle: string;
  stageId: string;
};

export type CreateStagePayload = { stageTitle: string };
// endregion actions
