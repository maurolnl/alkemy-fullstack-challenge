import React from "react";
import ReactDOM from "react-dom/client";
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {theme} from "./theme";
import App from "./App";
import LogIn from "./pages/log-in";
import ListOperations from "./pages/list-operations";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path="/" />
          <Route element={<LogIn />} path="logIn" />
          <Route element={<ListOperations />} path="ListOperations" />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
