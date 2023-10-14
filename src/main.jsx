import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraBaseProvider } from "@chakra-ui/react";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <ChakraBaseProvider>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);
