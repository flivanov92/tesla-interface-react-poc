import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    tuna: '#393c41',
    shark: '#181b21',
    mercury: '#e3e3e3',
    light: '#fff',
    dark: '#000',
  },
  border: {
    radius: '20',
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
