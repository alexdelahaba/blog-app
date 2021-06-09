import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import { routes } from "./routes";
import { CircularProgress } from "./../modules/materialUI-module";

export const Router = () => {
  const lazyLoaderComponent = (path) => lazy(() => import(`../pages/${path}`));
  return (
    <div className="router-container">
      <HashRouter>
        <Suspense fallback={<CircularProgress />}>
          <Switch>
            {routes.map((route) => {
              return (
                <Route
                  component={lazyLoaderComponent(route.componentFileName)}
                  key={route.id}
                  path={`/${route.path}`}
                />
              );
            })}
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="*">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
};
