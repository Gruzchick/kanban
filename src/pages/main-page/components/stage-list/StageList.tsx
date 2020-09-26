import React, { FC } from 'react';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

import { stageOrderSelector } from '../../../../store/kanban';
import { Stage } from '../stage';
import { StageCreator } from '../stage-creator';
import { STAGE_DROPPABLE_TYPE } from './constants';
import { wrapperCSS } from './styled';

export const StageList: FC = () => {
  const stagesOrder = useSelector(stageOrderSelector);

  return (
    <Droppable
      droppableId="stages"
      direction="horizontal"
      type={STAGE_DROPPABLE_TYPE}
    >
      {(droppableProvided: DroppableProvided) => (
        <div
          css={wrapperCSS}
          {...droppableProvided.droppableProps}
          // eslint-disable-next-line @typescript-eslint/unbound-method
          ref={droppableProvided.innerRef}
        >
          {stagesOrder.map((stageId, index) => (
            <Stage key={stageId} stageId={stageId} index={index} />
          ))}
          {droppableProvided.placeholder}
          <StageCreator />
        </div>
      )}
    </Droppable>
  );
};
