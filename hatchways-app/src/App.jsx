import "./App.css";
import Header from "./components/Header";
import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <Header />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
