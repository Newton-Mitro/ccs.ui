import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes/AppRoutes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const root = document.documentElement;
    const themeBackground = getComputedStyle(root)
      .getPropertyValue("--theme-background")
      .trim();
    document.body.style.backgroundColor = themeBackground;
  }, []);

  return <RouterProvider router={appRoutes}></RouterProvider>;
}

export default App;
