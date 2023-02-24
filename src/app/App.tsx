import "./styles/index.scss";
import { classnames } from "shared/lib/classnames/classnames";
import { Navbar, Sidebar } from "widgets";
import { useTheme } from "shared/lib/useTheme/useTheme";
import { Suspense } from "react";
import { AppRouter } from "./providers/Router";
import { ErrorBoundary } from "./providers/ErrorBoundary";

function App() {
  const { theme } = useTheme();

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

