import { useState } from "react";
import Grid from "@mui/material/Grid";
import Viewer from "./components/Viewer";
import StoreProvider from "./components/store";
import EditPanel from "./components/EditPanel";
import { AppBar, Toolbar } from "@mui/material";

function App() {
  return (
    <StoreProvider>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <Grid container>
        <Grid item xs={6}>
          <EditPanel />
        </Grid>
        <Grid item xs={6}>
          <Viewer />
        </Grid>
      </Grid>
    </StoreProvider>
  );
}

export default App;
