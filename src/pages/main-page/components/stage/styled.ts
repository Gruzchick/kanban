import { css } from '@emotion/core';

import { STAGE_PAPER_BG } from '../../../../common/constants';

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

export const paperCSS = css`
  background-color: ${STAGE_PAPER_BG};
  border-radius: 3px;
`;

export const headerCSS = css`
  position: relative;
  min-height: 20px;
  padding: 10px 36px 10px 16px;
  font-weight: bold;
  letter-spacing: 0.7px;
`;
