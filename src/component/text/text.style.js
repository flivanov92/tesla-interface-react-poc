import styled, { css } from 'styled-components';

const sizeMap = {
  s: 14,
  l: 48,
};

const getTitle = ({ myTitle = false }) => myTitle ? css`
    font-size: ${sizeMap.large / 16}rem;
    display: flex;
    justify-content: center;
    text-transform: capitalize;
    padding: 0.5rem;
  ` : css`
    font-size: ${sizeMap.small / 16}rem;
  `

const getLink = ({ myLink, theme }) => myLink ? css`
    text-decoration: none;
    border-bottom: 1px solid ${theme.color['gray-tuna']};
  ` : css`
  `

const getColor = ({ theme }) => theme.color['gray-tuna']



export const Text = styled.div`
  white-space: nowrap;
  color: ${getColor};
  justify-self: center;
  ${getTitle}
  ${getLink}
`;
