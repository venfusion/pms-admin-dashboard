import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router-dom';

export function lazyRoute<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends React.ComponentType<any>,
  I extends { [K2 in K]: T },
  K extends keyof I,
>(factory: () => Promise<I>, name: K): I {
  return Object.create({
    [name]: lazy(() => factory().then((module) => ({ default: module[name] }))),
  });
}

export const composeModuleRoutes = (...routes: RouteObject[][]): RouteObject[] => {
  return routes.flatMap((moduleRoutes) => {
    const routesWithLazyComponents = moduleRoutes.map((route) => {
      return {
        ...route,
        element: <Suspense fallback={null}>{route.element}</Suspense>,
      };
    });

    return routesWithLazyComponents;
  });
};
