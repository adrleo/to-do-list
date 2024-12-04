import React from "react";

const SwitchButton = ({ isOn, handleSwitch }) => {
  return (
    <>
      <button
        onClick={handleSwitch}
        className={`w-10 h-6 flex items-center rounded-full p-1 transition ${
          isOn ? "bg-blue-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
            isOn ? "translate-x-4" : ""
          }`}
        />
      </button>
      <div className="text-gray-400">Move done things to the end?</div>
    </>
  );
};

export default SwitchButton;
