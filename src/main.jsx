import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraBaseProvider } from "@chakra-ui/react";
import Theme from "./Theme";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={Theme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);
