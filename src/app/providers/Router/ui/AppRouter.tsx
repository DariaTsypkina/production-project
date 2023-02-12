import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "../lib/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
};

export default AppRouter;

