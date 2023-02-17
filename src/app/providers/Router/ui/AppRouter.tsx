import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "widgets/PageLoader";
import { routerConfig } from "../lib/routeConfig";

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {routerConfig.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<div className="content">{element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;

