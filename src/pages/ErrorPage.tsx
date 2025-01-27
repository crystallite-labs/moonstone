import React from "react"
import { useRouteError, isRouteErrorResponse } from "react-router-dom"

const ErrorPage: React.FC = () => {
  const error = useRouteError()
  let errorMessage: string

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === "string") {
    errorMessage = error
  } else {
    console.error(error)
    errorMessage = "Unknown error"
  }

  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center gap-8"
    >
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-400">
        <i>{errorMessage}</i>
      </p>
    </div>
  )
}

export default ErrorPage
