import * as React from "react"
import {Routes, Route} from "react-router-dom";
import NotFound from "./pages/404";

import shareholderRoutes from "app1/routes";
import publicMarketsRoutes from "app2/routes";

const routes = [...shareholderRoutes, ...publicMarketsRoutes];

const AppRoutes = () => {

    return (
        <>
            <React.Suspense fallback={'...loading'}>
                <Routes>
                    {routes.map((route) => (
                        <Route path={route.path} element={<route.component />} />
                    ))}
                </Routes>
           </React.Suspense>
        </>
    )
}

export default AppRoutes;