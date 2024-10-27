import { createStore } from "jotai"
import { Provider } from "jotai/react"
import { RouterProvider } from "react-router-dom"
import { router } from "@/Routes"

const store = createStore()

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
