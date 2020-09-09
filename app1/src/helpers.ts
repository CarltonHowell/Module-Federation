import * as React from 'react';
import {RouteContext} from './AppRoutes';

export const getRouteWithBase = (path: string, base?: string): string => {
    const baseToUse = base ? base : React.useContext(RouteContext);
    const newPath = baseToUse ? `/${baseToUse}${path}` : path;
    console.log(newPath);
    return newPath;
}