import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { createStageThunk } from '../../../../store/kanban';
import { AppDispatch } from '../../../../store/types';
import {
  addTaskButtonCSS,
  buttonsWrapperCSS,
  closeFormButtonCSS,
  formWrapperCSS,
  openFormButtonCSS,
  openFormButtonIconCSS,
  textareaCSS,
  wrapperCSS,
} from './styled';

export const StageCreator: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const stageTitleRef = useRef<HTMLTextAreaElement>(null);

  const [isInCreateForm, setIsInCreateForm] = useState(false);
  const [stageTitle, setStageTitle] = useState('');

  const handleOpenForm = (): void => {
    setIsInCreateForm(true);
  };

  const handleCloseForm = (): void => {
    setStageTitle('');
    setIsInCreateForm(false);
  };

  const handleTitleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setStageTitle(event.target.value);
  };

  const handleCreateTask = (): void => {
    if (stageTitle === '') {
      return;
    }
    void dispatch(createStageThunk({ stageTitle }));
    setStageTitle('');
    if (isInCreateForm && stageTitleRef.current !== null) {
      stageTitleRef.current.focus();
    }
  };

  useEffect(() => {
    if (isInCreateForm && stageTitleRef.current !== null) {
      stageTitleRef.current.focus();
    }
  }, [isInCreateForm]);

  return (
    <div css={wrapperCSS}>
      {isInCreateForm ? (
        <div css={formWrapperCSS}>
          <textarea
            css={textareaCSS}
            ref={stageTitleRef}
            value={stageTitle}
            onChange={handleTitleChange}
            placeholder="Ввести заголовок для этой карточки"
          />
          <div css={buttonsWrapperCSS}>
            <button css={addTaskButtonCSS} onClick={handleCreateTask}>
              Добавить этап
            </button>
            <button css={closeFormButtonCSS} onClick={handleCloseForm}>
              <ClearIcon />
            </button>
          </div>
        </div>
      ) : (
        <button css={openFormButtonCSS} onClick={handleOpenForm}>
          <AddIcon css={openFormButtonIconCSS} />
          <span>Добавить этап</span>
        </button>
      )}
    </div>
  );
};
