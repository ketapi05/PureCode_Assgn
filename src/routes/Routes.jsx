
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

const Landing = lazy(() => import("../components/Page/page"));

const otherRoutes = [
  {
    path: "/",
    name: "Landing",
    element: <Landing />,
  },
];

// AllRoutes component
const AllRoutes = (props) => {
  return (
    <Routes>
      <Route>
        {otherRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <DefaultLayout {...props}>
                <Suspense fallback={<div>Loading...</div>}>
                  {route.element}
                </Suspense>
              </DefaultLayout>
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AllRoutes;
