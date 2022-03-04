import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const Help = React.lazy(() => import("../pages/Help"));
const Contact = React.lazy(() => import("../pages/Contact"));

const AppRoutes: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      {children}

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading home page...</h1>}>
              <Home />{" "}
            </Suspense>
          }
        />
        <Route
          path={"/help"}
          element={
            <Suspense fallback={<h1>Loading help page...</h1>}>
              <Help />{" "}
            </Suspense>
          }
        />
        <Route
          path={"/contact"}
          element={
            <Suspense fallback={<h1>Loading contact page...</h1>}>
              <Contact />{" "}
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
