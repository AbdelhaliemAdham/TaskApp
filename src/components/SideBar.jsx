import React from "react";
import Button from "./Button";

function SideBar({ onClick, projects, onSelectProject, selectedProjectId }) {
  return (
    <aside className="min-w-[1/3] w-1/3 h-screen bg-sideBarColor caret-cyan-50 rounded-r-md md:w-72">
      <h1 className="text-stone-50 py-5 md:font-bold text-xl mx-10">
        Your Projects
      </h1>
      <Button onClick={onClick}> Create New Project</Button>
      {projects && (
        <ul>
          {projects.map((project, index) => {
            let cssClass =
              "my-2 w-full rounded-md text-sm py-2 font-bold text-slate-50";
            if (project.id === selectedProjectId) {
              cssClass += " bg-selectedItemColor text-white";
            } else {
              cssClass +=
                " bg-white text-black hover:bg-buttonHoverColor hover:text-white";
            }
            return (
              <li key={project.id} className="mx-5">
                <button
                  onClick={() => onSelectProject("Select Project", project.id)}
                  className={cssClass}
                >
                  {project.name}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </aside>
  );
}

export default SideBar;
