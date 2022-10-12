import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import Cat from "./Cat.json";

const ErrorPage = () => {
  const errorData = useRouteError();
  const { status, statusText } = errorData;

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="text-center">
        <Lottie animationData={Cat} className="w-[70%] mx-auto" />
        <h2 className="text-4xl text-red-600 my-4 font-bold">{status}</h2>
        <h4 className="text-xl font-medium">{statusText}</h4>
        <Link to="/home">
          <button className="btn btn-error text-white mt-2">
            Go To Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
