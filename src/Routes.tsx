import { RouteObject, createBrowserRouter } from "react-router-dom"
import ErrorPage from "@/pages/ErrorPage"
import Home from "./pages/Home"
import SampleLayout from "./layouts/SampleLayout"

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <SampleLayout />,
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
