import React, { forwardRef } from "react";

const Input = forwardRef(function Input({ type, label, ...props }, ref) {
  let content;
  if (type === "text") {
    content = (
      <input
        ref={ref}
        {...props}
        type="text"
        className="w-full border border-gray-300 p-2 rounded"
      />
    );
  } else if (type === "text-area") {
    content = (
      <textarea
        ref={ref}
        className="w-full border border-gray-300 p-2 rounded"
        {...props}
      />
    );
  } else {
    content = (
      <input
        ref={ref}
        {...props}
        type="date"
        className="w-full border border-gray-300 p-2 rounded"
      />
    );
  }

  return (
    <div className="w-full mb-4">
      <label className="block text-gray-700 mb-1 uppercase font-serif">
        {label}
      </label>
      {content}
    </div>
  );
});
export default Input;
