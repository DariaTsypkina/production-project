import "./styles/index.scss";
import { classnames } from "shared/lib/classnames/classnames";
import { AppRouter } from "./providers/Router";
import { Navbar, Sidebar } from "widgets";
import { useTheme } from "shared/lib/useTheme/useTheme";
import { Suspense } from "react";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classnames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <main className="main">
          <Sidebar />
          <AppRouter />
        </main>
      </Suspense>
    </div>
  );
};

export default App;

