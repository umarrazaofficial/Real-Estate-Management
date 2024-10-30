import React from 'react';
import Router from './Router';
import GlobalStyles, { StyledToastContainer } from './styles/GlobalStyles.styles';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { AuthContextProvider } from './Context/authContext';

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Router />
        </BrowserRouter>
        <StyledToastContainer />
      </AuthContextProvider>
    </>
  );
};

export default App;
