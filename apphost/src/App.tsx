import * as React from "react";
import {HashRouter} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navigation from "./Navigation";

const App = () => (
  <HashRouter>
      <Navigation/>
      <div style={{padding: 40}}>
          <AppRoutes />
      </div>
  </HashRouter>
);

export default App;