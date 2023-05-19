import React from "react";
import "../App.css";

const LoadingPage = () => {
  return (
    <body class="flex justify-center items-center">
    <div class="bg-gray-200 p-4">
      <div class="flex justify-center items-center h-full">
        <div class="bg-gray-100 p-4">
          <h1 class="text-2xl font-bold">Centered Box with Equal Padding</h1>
          <p>This box is centered on the page with equal padding around it using Tailwind CSS.</p>
        </div>
      </div>
    </div>
  </body>
  );
};

export default LoadingPage;
