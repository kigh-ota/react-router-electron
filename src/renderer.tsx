import { AppBar, Toolbar } from "@mui/material";
import * as React from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppBar position="sticky">
      <Toolbar>react-router-electron</Toolbar>
    </AppBar>
  </React.StrictMode>
);
