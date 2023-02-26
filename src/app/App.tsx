import { classnames } from "shared/lib/classnames/classnames";
import { Navbar, Sidebar } from "widgets";
import { useTheme } from "shared/lib/useTheme/useTheme";
import { Suspense, useEffect } from "react";
import { AppRouter } from "./providers/Router";
import { ErrorBoundary } from "./providers/ErrorBoundary";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);

  return (
    <div className={classnames("app", [theme], {})}>
      <ErrorBoundary>
        <Suspense fallback="">
          <Navbar />
          <main className="main">
            <Sidebar />
            <AppRouter />
          </main>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;

