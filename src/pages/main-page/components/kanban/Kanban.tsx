import React, { FC, useCallback } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import { moveStageThunk, moveTaskThunk } from '../../../../store/kanban';
import { AppDispatch } from '../../../../store/types';
import { STAGE_DROPPABLE_TYPE, StageList } from '../stage-list';
import { wrapperCSS } from './styled';

export const Kanban: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onDragEnd = useCallback(
    (result: DropResult): void => {
      const { source, destination, type } = result;

      if (!destination) {
        return;
      }

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      if (type === STAGE_DROPPABLE_TYPE) {
        void dispatch(
          moveStageThunk({
            sourceIndex: source.index,
            destinationIndex: destination.index,
          }),
        );
        return;
      }

      void dispatch(
        moveTaskThunk({
          sourceLocation: {
            stageId: source.droppableId,
            index: source.index,
          },
          destinationLocation: {
            stageId: destination.droppableId,
            index: destination.index,
          },
        }),
      );
    },
    [dispatch],
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div css={wrapperCSS}>
        <StageList />
      </div>
    </DragDropContext>
  );
};
