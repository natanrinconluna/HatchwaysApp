import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <Header />
        <Body />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
