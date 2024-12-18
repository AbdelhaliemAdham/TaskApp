import React from "react";
import Button from "./Button";
import image from "../assets/no-projects.png";

function NoProjects({ onClick }) {
  return (
    <div className="flex flex-col items-center text-buttonColor w-3/4 mt-14  ">
      <img src={image} className="w-12 h-12 mb-2 " />
      <h1 className="font-bold">No projects found</h1>
      <p className="my-5 font-serif">
        It looks like you haven't created any projects yet. Click the button
        below top
      </p>
      <Button onClick={onClick}>Create New Project</Button>
    </div>
  );
}

export default NoProjects;
