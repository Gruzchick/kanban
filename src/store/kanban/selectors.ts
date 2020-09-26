import { createSelector } from '@reduxjs/toolkit';
import { OutputParametricSelector } from 'reselect';

import { RootState } from '../types';
import { KanbanState, Stage, Task } from './types';

export const kanbanSelector = (state: RootState): KanbanState => state.kanban;

export const stagesSelector = createSelector(
  kanbanSelector,
  (kanban: KanbanState): KanbanState['stages'] => kanban.stages,
);

export const createStageByIdSelector = (): OutputParametricSelector<
  RootState,
  string,
  Stage,
  (res1: KanbanState['stages'], res2: string) => Stage
> =>
  createSelector(
    stagesSelector,
    (_: RootState, stageId: string): string => stageId,
    (stages: KanbanState['stages'], stageId: string): Stage =>
      stages.byIds[stageId],
  );

export const tasksSelector = createSelector(
  kanbanSelector,
  (kanban: KanbanState): KanbanState['tasks'] => kanban.tasks,
);

export const createTaskByIdSelector = (): OutputParametricSelector<
  RootState,
  string,
  Task,
  (res1: KanbanState['tasks'], res2: string) => Task
> =>
  createSelector(
    tasksSelector,
    (_: RootState, taskId: string): string => taskId,
    (tasks: KanbanState['tasks'], tasksId: string): Task =>
      tasks.byIds[tasksId],
  );

export const stageOrderSelector = createSelector(
  kanbanSelector,
  (kanban: KanbanState): string[] => kanban.stagesOrder,
);
