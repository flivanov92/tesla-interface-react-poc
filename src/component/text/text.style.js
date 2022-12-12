import styled, { css } from 'styled-components';


const sizeMap = {
  s: 14,
  l: 48,
};

const getTitle = ({ myTitle = false }) => myTitle ? css`
    font-size: ${sizeMap.l / 16}rem;
    display: flex;
    justify-content: center;
    text-transform: capitalize;
    padding: 0.5rem;
  ` : css`
    font-size: ${sizeMap.s / 16}rem;
  `

const getLink = ({ myLink, theme }) => myLink ? css`
    text-decoration: none;
    border-bottom: 1px solid ${theme.color['gray-tuna']};
  ` : css`
  `
  // helps with readability of the letters like qpy for old browsers

const getColor = ({ theme }) => theme.color['gray-tuna']



export const Text = styled.div`
  white-space: nowrap;
  color: ${getColor};
  justify-self: center;
  align-self: center;
  ${getTitle}
  ${getLink}
`;
