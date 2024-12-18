import React, { useState } from "react";

function NewTask({ onAddTask }) {
  const [newTask, setNewTask] = useState("");
  function handleChange(event) {
    setNewTask(event.target.value);
  }
  function handleClickButton() {
    if (newTask !== "") {
      onAddTask(newTask);
    } else {
      alert("put some data in task input field");
    }
    setNewTask("");
  }
  return (
    <div>
      <input
        value={newTask}
        type="text"
        className="rounded-md py-1 px-3 mr-3 my-3"
        onChange={handleChange}
      />
      <button
        onClick={handleClickButton}
        className="bg-buttonColor font-bold font-serif py-1 px-3 rounded-md text-white hover:bg-customOrangeColor"
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
