import Sidebar from "./components/Sidebar";
import CreateProjectForm from "./components/CreateProjectForm";
import Project from "./components/Project";
import logoImg from "./assets/logo.png";
import { useState } from "react";

function App() {
  console.log("app is rendered");
  const [openForm, setOpenForm] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showEmpty, setShowEmpty] = useState(true);

  function handleOpenForm() {
    setOpenForm(true);
    setShowEmpty(false);
  }

  function handleCloseForm() {
    setOpenForm(false);
    setShowEmpty(true);
  }

  function handleSubmit(project) {
    setProjects((prevProjects) => [...prevProjects, project]);
    setOpenForm(false);
    setShowEmpty(true);
  }

  function openProject(projectId) {
    const project = projects.find((project) => project.id === projectId);
    setSelectedProject(project);
    setShowEmpty(false);
    setOpenForm(false);
  }

  function handleAddTask(projectId, taskValue) {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? { ...project, tasks: [...project.tasks, taskValue] }
          : project
      )
    );

    setSelectedProject((prevProject) => ({
      ...prevProject,
      tasks: [...prevProject.tasks, taskValue],
    }));
  }

  function handleClearTask(projectId, taskId) {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== taskId),
            }
          : project
      )
    );

    setSelectedProject((prevProject) => ({
      ...prevProject,
      tasks: prevProject.tasks.filter((task) => task.id !== taskId),
    }));
  }

  function handleProjectDelete(projectId) {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== projectId)
    );
    setShowEmpty(true);
  }

  return (
    <main className="flex pt-8 h-screen gap-8">
      <Sidebar
        onAddProjectClick={handleOpenForm}
        onOpenProject={openProject}
        projects={projects}
      />
      {showEmpty && (
        <section className="mt-24 text-center w-2/3">
          <img
            src={logoImg}
            alt="task logo image"
            className="size-16 object-contain mx-auto"
          />
          <h2 className="text-xl font-bold text-stone-500 my-4">
            No project selected
          </h2>
          <p className="text-stone-400 mb-4">
            Select a project or get started with a new one
          </p>
          <button
            onClick={handleOpenForm}
            type="button"
            className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          >
            Create new project
          </button>
        </section>
      )}
      {openForm && (
        <CreateProjectForm
          onButtonClick={handleCloseForm}
          onProjectSubmit={handleSubmit}
        />
      )}
      {!openForm && !showEmpty && (
        <Project
          onAddTask={handleAddTask}
          onClearTask={handleClearTask}
          project={selectedProject}
          onProjectDelete={handleProjectDelete}
        />
      )}
    </main>
  );
}

export default App;
