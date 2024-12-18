import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function AddProject({ onCancel, onSubmitProject }) {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const dialogRef = useRef();

  function onSaveProject() {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;

    if (name.trim() === "" || description.trim() === "" || date.trim() === "") {
      dialogRef.current.open();
      return;
    }

    onSubmitProject(
      {
        name: name,
        description: description,
        date: date,
      },
      "No Projects"
    );
  }

  return (
    <div className="w-full mx-5 text-start font-bold text-grey">
      <menu className="flex justify-end">
        <ul>
          <li>
            <button
              className="font-bold mr-2 hover:border-2 hover:border-black py-2 px-6 rounded-md"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="mx-2 bg-buttonColor hover:bg-customOrangeColor font-bold text-white rounded-md py-2 px-6 my-6"
              onClick={onSaveProject}
            >
              Save
            </button>
          </li>
        </ul>
      </menu>
      <Input type={"text"} label={"Name"} ref={nameRef} />
      <Input type={"text-area"} label={"Description"} ref={descriptionRef} />
      <Input type={"date"} label={"Date"} ref={dateRef} />

      {/* Custom Dialog */}

      <Modal
        title={"Error"}
        message={"Please fill all the fields."}
        ref={dialogRef}
        caption={"Ok"}
      />
    </div>
  );
}

export default AddProject;
