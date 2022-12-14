import React from "react";
// import theme from "./theme/theme";
import theme from "./theme/theme";
import "./App.css";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
