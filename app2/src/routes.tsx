import * as React from "react";
import {Navigate} from "react-router";

const Home = React.lazy(() => import("./pages/Home"));
const Company = React.lazy(() => import("./pages/Company"));

const routes = [
  {
    path: "public",
    component: Home,
  },
  {
    path: "public/company",
    component: Company,
  },
  {
    path: "/",
    component: () => <Navigate to="/public"/>,
  },
];

export default routes;