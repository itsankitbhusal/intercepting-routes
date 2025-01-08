import React from "react";

const loading = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-opacity-50 backdrop-blur grid place-items-center">
      <h3 className=" text-4xl font-bold tracking-tighter w-fit h-fit">
        Loading Parallel Route
      </h3>
    </div>
  );
};

export default loading;
