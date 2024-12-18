import React from "react";

function Button({ children, ...props }) {
  const className =
    "my-3 px-5 font-bold py-2 text-white bg-buttonColor rounded-md hover:bg-customOrangeColor";
  return (
    <div>
      <button {...props} className={className}>
        {children}
      </button>
    </div>
  );
}

export default Button;
