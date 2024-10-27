import { RouteObject, createBrowserRouter } from "react-router-dom"
import DashboardLayout from "@/modules/dashboard/layout/DashboardLayout"
import ErrorPage from "@/pages/ErrorPage"
import Home from "@/modules/dashboard/pages/Home"

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]
export const router = createBrowserRouter(routes)
