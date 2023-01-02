import styled, {css} from 'styled-components';

export const Vshape = styled.a`
  width: 48px;
  height: 48px;
  background-color: transparent;
  transition: 250ms;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;

  ${({ id }) =>
    id === 'accessories'
      ? css`
    cursor: n-resize;
    transform: rotate(180deg);
  `
      : css`
    cursor: s-resize;
  `}

  &:hover {
    fill: ${({ theme }) => theme.color.mercury};
    background-color: ${({ theme }) => theme.color.shark};
  }
`;
