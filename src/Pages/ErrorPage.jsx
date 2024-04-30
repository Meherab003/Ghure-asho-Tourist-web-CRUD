import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col space-x-2 items-center justify-center h-screen">
      <h2 className="text-6xl text-center font-bold">Opps...!</h2>
      <div className="flex items-center justify-center">
        <img
          className=""
          src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg"
          alt={error.status}
        />
      </div>
     <div className="flex items-center justify-center">
     <Link className="btn bg-green-600 text-black" to='/'>Back Home</Link>
     </div>
    </div>
  );
};

export default ErrorPage;
