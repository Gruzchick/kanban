import React, { FC, useMemo } from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

import { createTaskByIdSelector } from '../../../../store/kanban';
import { RootState } from '../../../../store/types';
import { wrapperCSS } from './styled';

type Props = {
  taskId: string;
  index: number;
};

// eslint-disable-next-line prefer-arrow-callback
export const Task: FC<Props> = React.memo(function Task(props) {
  const { taskId, index } = props;

  const taskByIdSelector = useMemo(createTaskByIdSelector, []);

  const { title } = useSelector((state: RootState) =>
    taskByIdSelector(state, taskId),
  );

  return (
    <Draggable draggableId={taskId} index={index}>
      {(draggableProvided: DraggableProvided) => (
        <div
          css={wrapperCSS}
          // eslint-disable-next-line @typescript-eslint/unbound-method
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
        >
          {title}
        </div>
      )}
    </Draggable>
  );
});
