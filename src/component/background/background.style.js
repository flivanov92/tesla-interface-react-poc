import styled from 'styled-components';

export const Background = styled.div `
  /* dimensions */
  height: 100vh;
  width: 100vw;
  padding: 32px;
  /* align */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background */
  background-size: cover;
  background-position: center;
  background-image: url(${({image}) => `/image/background/${image}-mobile.jpg`});
  
  /* tablet and desktopx */
  @media screen and (min-width: 768px){
    background-image: url(${({image}) => `/image/background/${image}.jpg`});

  }
`;


