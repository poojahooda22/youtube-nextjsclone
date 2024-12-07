'use client'
import React from "react";
import { useSidebarContext } from "./SidebarContext";

const Trigger = () => {
  const { setIsVisible } = useSidebarContext(); // Access setVisible from context

  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => setIsVisible((prev: boolean) => !prev)} // Toggle sidebar visibility
      >
        Click me
      </button>
    </div>
  );
};

export default Trigger;
