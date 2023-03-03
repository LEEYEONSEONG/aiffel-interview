import { css } from 'styled-components';

type JustifyContentType =
  | ''
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit';
type AlignItemsType =
  | ''
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit';
type DirectionType = 'column' | 'row' | 'column-reverse';

export const flex = (
  justify: JustifyContentType,
  align: AlignItemsType,
  direction: DirectionType = 'row',
) => css`
  display: flex;
  align-items: ${align};
  flex-direction: ${direction};
  justify-content: ${justify};
`;
