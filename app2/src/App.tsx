import * as React from "react";
import {HashRouter} from "react-router-dom";
import AppRoutes from './AppRoutes';

const App = () => (
  <HashRouter>
    <AppRoutes/>
  </HashRouter>
);

export default App;