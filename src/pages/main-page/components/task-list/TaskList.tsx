import React, { FC } from 'react';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';

import { Task } from '../task';
import { TaskCreator } from '../task-creator/TaskCreator';
import { TASK_DROPPABLE_TYPE } from './constants';
import { wrapperCSS } from './styled';

type Props = {
  tasksIds: string[];
  stageId: string;
};

export const TaskList: FC<Props> = (props) => {
  const { tasksIds, stageId } = props;

  return (
    <Droppable droppableId={stageId} type={TASK_DROPPABLE_TYPE}>
      {(droppableProvided: DroppableProvided) => {
        return (
          <div
            css={wrapperCSS}
            // eslint-disable-next-line @typescript-eslint/unbound-method
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {tasksIds.map((taskId, index) => (
              <Task key={taskId} taskId={taskId} index={index} />
            ))}
            {droppableProvided.placeholder}
            <TaskCreator stageId={stageId} />
          </div>
        );
      }}
    </Droppable>
  );
};
