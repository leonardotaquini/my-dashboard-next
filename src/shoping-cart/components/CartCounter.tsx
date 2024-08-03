"use client";

import { useState } from "react";

export const CartCounter = () => {
  const [count, setCount] = useState(0);

  const btnAction = (action: "add" | "substract") => {
    switch (action) {
      case "add":
        setCount(count + 1);
        break;
      case "substract":
        count > 0 && setCount(count - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <span className="text-9xl">{count}</span>
      <div className="flex justify-center items-center space-x-3">
        <button
          className="px-4 rounded bg-blue-600 text-white"
          onClick={() => btnAction("add")}
        >
          +1
        </button>
        <button
          className="px-4 rounded bg-red-500 text-white"
          onClick={() => btnAction("substract")}
        >
          -1
        </button>
      </div>
    </div>
  );
};
