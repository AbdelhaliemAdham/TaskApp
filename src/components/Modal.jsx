import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(({ title, message, caption }, ref) => {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      close: () => dialogRef.current.close(),
      open: () => dialogRef.current.showModal(),
    };
  });
  return createPortal(
    <dialog ref={dialogRef}>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="mt-2 font-medium font-serif">{message}</p>
          <form action="dialog">
            <Button>{caption}</Button>
          </form>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
