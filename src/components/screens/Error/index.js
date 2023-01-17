import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const { status, statusText } = error;
  console.log(error);
  return (
    <div>
      <h4>Error Code: {status}</h4>
      <h4>Error Message: {statusText} </h4>
    </div>
  );
};

export default Error;
