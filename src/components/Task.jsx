import React from "react";
import NewTask from "./NewTask";

function Task({ tasks, onAddTask, onDeleteTask }) {
  return (
    <div className="text-start">
      <h1 className="font-bold font-serif text-buttonColor text-2xl my-3">
        Tasks
      </h1>
      {tasks.length === 0 && (
        <p className="font-serif text-buttonColor">
          this projects don't have any tasks yet!.
        </p>
      )}
      <NewTask onAddTask={onAddTask} />
      {tasks.length > 0 && (
        <ul className="py-1 mt-3 w-56">
          {tasks.map((task) => (
            <li className="flex pl-3 pr-4 justify-between my-1 bg-selectedItemColor py-2 rounded-md">
              <span className="text-white font-serif font-bold ">
                {task.title}
              </span>
              <button
                onClick={() => onDeleteTask(task.taskId)}
                className="font-bold font-serif text-white"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Task;
