import * as React from "react";
import {Navigate} from "react-router";

const Home = React.lazy(() => import("./pages/Home"));
const Company = React.lazy(() => import("./pages/Company"));

const routes = [
  {
    path: "shareholders",
    component: Home,
  },
  {
    path: "shareholders/company",
    component: Company,
  },
  {
    path: "/",
    component: () => <Navigate to="/shareholders"/>,
  },
];

export default routes;