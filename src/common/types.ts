import { SerializedStyles } from '@emotion/serialize';

import { theme } from './helpers/theme';

export type FCSS<T = Record<string, unknown>> = (prop: T) => SerializedStyles;

export type AppTheme = typeof theme;
