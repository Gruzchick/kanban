import { css } from '@emotion/core';

import {
  DARK_TEXT,
  LIGHT_TEXT,
  MAIN_BLUE,
  MAIN_BLUE_HOVER,
  STAGE_PAPER_BG,
  SUCCESS,
  SUCCESS_HOVERED,
  WHITE,
} from '../../../../common/constants';

export const wrapperCSS = css`
  width: 272px;
  margin: 0 4px;
  &:first-child {
    margin-left: 8px;
  }
  &:last-child {
    margin-right: 8px;
  }
`;
export const textareaCSS = css`
  overflow: hidden;
  width: 100%;
  height: 60px;
  padding: 8px 8px;
  border: none;
  margin-bottom: 10px;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  letter-spacing: 0;
  line-height: 18px;
  overflow-wrap: break-word;
  resize: none;
  word-spacing: -5px;
`;

export const buttonsWrapperCSS = css`
  display: flex;
`;
export const addTaskButtonCSS = css`
  padding: 6px 12px;
  border: none;
  margin-right: 6px;
  background-color: ${SUCCESS};
  border-radius: 3px;
  color: ${WHITE};
  cursor: pointer;
  letter-spacing: 1px;
  line-height: 20px;
  text-align: center;
  &:hover {
    background-color: ${SUCCESS_HOVERED};
  }
`;

export const closeFormButtonCSS = css`
  display: flex;
  align-content: center;
  align-items: center;
  padding: 0;
  border: none;
  margin: 0;
  background-color: transparent;
  border-radius: 3px;
  color: ${LIGHT_TEXT};
  cursor: pointer;
  &:hover {
    color: ${DARK_TEXT};
  }
`;

export const openFormButtonCSS = css`
  display: flex;
  width: 100%;
  padding: 10px 8px;
  border: none;
  margin: 0;
  background-color: ${MAIN_BLUE};
  border-radius: 3px;
  color: ${WHITE};
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 0.6px;
  user-select: none;
  white-space: nowrap;
  &:hover {
    background-color: ${MAIN_BLUE_HOVER};
  }
`;

export const openFormButtonIconCSS = css`
  font-size: 20px;
`;

export const formWrapperCSS = css`
  padding: 5px;
  background-color: ${STAGE_PAPER_BG};
  border-radius: 3px;
`;
