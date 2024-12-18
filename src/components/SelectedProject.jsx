import React from "react";
import Task from "./Task";

function SelectedProject({
  project,
  onDelete,
  onAddTask,
  tasks,
  onDeleteTask,
}) {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-full mx-3">
      <header className="mt-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold font-serif text-buttonColor">
            {project.name}
          </h1>
          <button
            onClick={onDelete}
            className="py-3 px-6 rounded-md font-bold bg-buttonColor text-white hover:bg-customOrangeColor ml-2"
          >
            DELETE
          </button>
        </div>
      </header>
      <p className="my-1 text-stone-500 mx-1 pt-2 text-left font-serif ">
        {formattedDate}
      </p>
      <p className="pt-2 my-3 text-stone-500 text-left pb-5 font-serif border-b-2 border-stone-700">
        {project.description}
      </p>
      <Task onAddTask={onAddTask} tasks={tasks} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default SelectedProject;
