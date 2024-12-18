import { useState, useEffect } from "react";
import SideBar from "./components/SideBar";
import NoProjects from "./components/NoProjects";
import AddProject from "./components/AddProject"; // Corrected file extension
import ProjectData from "./components/ProjectData";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    // Corrected state name
    currentState: "No Projects",
    projectId: null,
    tasks: [],
    projects: [], // Corrected typo
  });

  function handleStartProject(currentState) {
    if (currentState === "Submit Project") {
      setProjectsState((prev) => ({
        ...prev,
        currentState: "Project Added",
      }));
    }
    setProjectsState((prev) => ({
      ...prev,
      currentState: currentState,
    }));
  }

  function cancelProject(currentState) {
    setProjectsState((prev) => ({
      ...prev,
      currentState: currentState,
    }));
  }
  function addProjectTask(title) {
    setProjectsState((prev) => {
      const taskId = Math.random();
      const newTask = {
        title: title,
        taskId: taskId,
        projectId: projectsState.projectId, // Consider using a more unique ID generator
      };
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  }
  function deleteProjectTask(id) {
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.taskId !== id),
      };
    });
  }

  function handleAddProjects(projectData, currentState) {
    setProjectsState((prev) => {
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        projectId: projectID,
        id: projectID, // Consider using a more unique ID generator
      };
      return {
        ...prev,
        currentState: currentState,
        projects: [...prev.projects, newProject],
      };
    });
  }
  function handleSelectedProject(currentState, selectProjectId) {
    setProjectsState((prev) => {
      return {
        ...prev,
        currentState: currentState,
        projectId: selectProjectId,
      };
    });
  }
  function handleDeleteProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        currentState: "No Projects",
        projects: prev.projects.filter(
          (project) => project.id !== prev.projectId
        ),
      };
    });
  }

  // Log projectsState using useEffect

  const selectedProject = projectsState.projects.find(
    (proj) => proj.id === projectsState.projectId
  );
  useEffect(() => {
    console.log(selectedProject); // This will log the updated state after setProjectsState
  });
  let current;

  // Declare current variable
  if (projectsState.currentState === "Select Project") {
    current = (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={addProjectTask}
        tasks={projectsState.tasks}
        onDeleteTask={deleteProjectTask}
      />
    );
  } else if (projectsState.currentState === "No Projects") {
    // Corrected syntax
    current = <NoProjects onClick={() => handleStartProject("Add Project")} />;
  } else {
    current = (
      <AddProject
        onCancel={() => cancelProject("No Projects")}
        onSubmitProject={handleAddProjects}
      />
    );
  }

  return (
    <main className="h-screen flex items-start text-center gap-3 bg-backgroundColor">
      <SideBar
        onClick={handleStartProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectedProject}
        selectedProjectId={projectsState.projectId}
      />
      {current}
    </main>
  );
}

export default App;
