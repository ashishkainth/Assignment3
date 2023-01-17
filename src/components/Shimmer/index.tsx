import React from "react";

const Shimmer = () => {
  return Array(10)
    .fill("")
    .map((item, index) => {
      return (
        <div key={index} className="loading-card">
          <div></div>
          <h4></h4>
        </div>
      );
    });
};

export default Shimmer;
