import React from "react";
import "../App.css";

const LoadingPage = () => {
  return (
    <div className="bg-gray-200 p-4 flex justify-center items-center">
      <div className="flex justify-center items-center h-full">
        <div className="bg-gray-100 p-4">
          <h1 className="text-2xl font-bold">Centered Box with Equal Padding</h1>
          <p>This box is centered on the page with equal padding around it using Tailwind CSS.</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
