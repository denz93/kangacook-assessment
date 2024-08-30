import { ErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
    const error = useRouteError() as ErrorResponse;
    console.error(error)
    return <div className="text-center mt-10">
        <h1 className="text-4xl my-10">Oops!</h1>
        <p className="font-bold italic">{error.statusText}</p>
        <p className="italic">{error.data}</p>
    </div>
}