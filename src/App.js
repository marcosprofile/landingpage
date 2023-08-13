import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MainBody } from './styles/Global.styled';
import Header from './components/Header';
import theme from './utils/Theme';
import Showcase from './components/Showcase';
import MyServices from './components/MyServices';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Header />
        <Showcase />
        <MyServices />
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
