import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="flex justify-center my-4">icon</div>
        <h1 className="display text-3xl text-primary">404</h1>
        <p className="fs-3">
          <span className="text-red-600">Opps!</span> Page not found.
        </p>
        <p className="pb-2">The page you’re looking for doesn’t exist.</p>
        <Link to="/">
          <button classes="btn-error">Go Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
