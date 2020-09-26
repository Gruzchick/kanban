import React, { FC, useMemo } from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

import { createStageByIdSelector } from '../../../../store/kanban';
import { RootState } from '../../../../store/types';
import { TaskList } from '../task-list';
import { headerCSS, paperCSS, wrapperCSS } from './styled';

type Props = {
  stageId: string;
  index: number;
};

export const Stage: FC<Props> = (props) => {
  const { stageId, index } = props;

  const stageByIdSelector = useMemo(createStageByIdSelector, []);

  const { tasksOrder, title } = useSelector((state: RootState) =>
    stageByIdSelector(state, stageId),
  );

  return (
    <Draggable draggableId={stageId} index={index}>
      {(draggableProvided: DraggableProvided) => (
        <div
          css={wrapperCSS}
          {...draggableProvided.draggableProps}
          // eslint-disable-next-line @typescript-eslint/unbound-method
          ref={draggableProvided.innerRef}
        >
          <div css={paperCSS}>
            <div css={headerCSS} {...draggableProvided.dragHandleProps}>
              {title}
            </div>
            <TaskList stageId={stageId} tasksIds={tasksOrder} />
          </div>
        </div>
      )}
    </Draggable>
  );
};
