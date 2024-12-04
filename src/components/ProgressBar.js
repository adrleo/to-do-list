import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="flex justify-center items-center m-4 gap-2">
      <span className="text-blue-500">{progress}%</span>
      <div className="w-full bg-white rounded-lg overflow-hidden h-4">
        <div
          className="bg-blue-500 h-full "
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
