import styled from 'styled-components';

export const Button = styled.button`
  border: 0;
  background-color: cornflowerblue;
  width: 256px;
  height: 40px;
  cursor: pointer;
  transition: 200ms ;
  border-radius: ${({ theme }) => theme.border.radius / 16}rem;
    color: ${({ theme, nuance }) =>
      nuance ? theme.color.mercury : theme.color.shark};
    background-color: ${({ theme, nuance }) =>
      nuance ? theme.color.shark : theme.color.mercury};

  &:hover {
    background-color: ${({ theme, nuance }) =>
      nuance ? theme.color.mercury : theme.color.shark};
    color: ${({ theme, nuance }) =>
      nuance ? theme.color.shark : theme.color.mercury};
  }
`;
