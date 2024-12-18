import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import AppLayout from "../ui/AppLayout";
import peopleRoutes from "./peopleRoutes";
import usersRoutes from "./usersRoutes";
import driversRoutes from "./driversRoutes";
import ApplicationTypesRoutes from "./applicationTypesRoutes";
import testTypesRoutes from "./testTypesRoutes";
import ApplicationRoutes from "./applicationRoutes";
import LicensesHistory from "../../Feasures/License/LicensesHistory";
import internationalLicensesRoutes from "./internationalLicensesRoutes";
import detainLicensesRoutes from "./DetainLicensesRoutes";
import licensesRoutes from "./licensesRoutes";
import PageNotFound from "../Pages/PageNotFound";
import Login from "../Pages/Login";
import ProtectedRoute from "../../Feasures/Auth/ProtectedRoute";

function Router() {
  const routes = [
    {
      element: (
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Navigate replace to="dashboard" />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        ApplicationRoutes,
        {
          path: "licenses-history/:id",
          element: <LicensesHistory />,
        },
        licensesRoutes,
        internationalLicensesRoutes,
        ApplicationTypesRoutes,
        testTypesRoutes,
        detainLicensesRoutes,
        peopleRoutes,
        usersRoutes,
        driversRoutes,
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ];
  return useRoutes(routes);
}

export default Router;
