import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTaskThunk } from '../../../../store/kanban';
import { AppDispatch } from '../../../../store/types';
import {
  addTaskButtonCSS,
  buttonsWrapperCSS,
  closeFormButtonCSS,
  openFormButtonCSS,
  openFormButtonIconCSS,
  textareaCSS,
} from './styled';

type Props = {
  stageId: string;
};

export const TaskCreator: FC<Props> = (props) => {
  const { stageId } = props;

  const dispatch = useDispatch<AppDispatch>();

  const taskTitleRef = useRef<HTMLTextAreaElement>(null);

  const [isInCreateForm, setIsInCreateForm] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');

  const handleOpenForm = (): void => {
    setIsInCreateForm(true);
  };

  const handleCloseForm = (): void => {
    setTaskTitle('');
    setIsInCreateForm(false);
  };

  const handleTitleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setTaskTitle(event.target.value);
  };

  const handleCreateTask = (): void => {
    if (taskTitle === '') {
      return;
    }
    void dispatch(createTaskThunk({ stageId, taskTitle }));
    setTaskTitle('');
    if (isInCreateForm && taskTitleRef.current !== null) {
      taskTitleRef.current.focus();
    }
  };

  useEffect(() => {
    if (isInCreateForm && taskTitleRef.current !== null) {
      taskTitleRef.current.focus();
    }
  }, [isInCreateForm]);

  return (
    <div>
      {isInCreateForm ? (
        <div>
          <textarea
            css={textareaCSS}
            ref={taskTitleRef}
            value={taskTitle}
            onChange={handleTitleChange}
            placeholder="Ввести заголовок для этой карточки"
          />
          <div css={buttonsWrapperCSS}>
            <button css={addTaskButtonCSS} onClick={handleCreateTask}>
              Добавить задачу
            </button>
            <button css={closeFormButtonCSS} onClick={handleCloseForm}>
              <ClearIcon />
            </button>
          </div>
        </div>
      ) : (
        <button css={openFormButtonCSS} onClick={handleOpenForm}>
          <AddIcon css={openFormButtonIconCSS} />
          <span>Добавить задачу</span>
        </button>
      )}
    </div>
  );
};
