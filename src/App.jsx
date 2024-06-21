import Sidebar from "./components/Sidebar";
import CreateProjectForm from "./components/CreateProjectForm";
import Project from "./components/Project";
import EmptyState from "./components/EmptyState";
import { useState } from "react";

function App() {
  console.log("app is rendered");
  const [openForm, setOpenForm] = useState(false);
  const [projects, setProjects] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [showEmpty, setShowEmpty] = useState(true);

  function handleOpenForm() {
    setOpenForm(true);
  }

  function handleCloseForm() {
    setOpenForm(false);
  }

  function handleSubmit(project) {
    setProjects((prevState) => ({
      ...prevState,
      selectedProject: undefined,
      projects: [project, ...prevState.projects],
    }));
    setOpenForm(false);
  }

  function openProject(projectId) {
    const project = projects.projects.find(
      (project) => project.id === projectId
    );
    setProjects((prevState) => ({
      ...prevState,
      selectedProject: project,
    }));
    setOpenForm(false);
  }

  function handleAddTask(projectId, taskValue) {
    setProjects((prevState) => ({
      ...prevState,
      tasks: [taskValue, ...prevState.tasks],
    }));

    // setSelectedProject((prevProject) => ({
    //   ...prevProject,
    //   tasks: [...prevProject.tasks, taskValue],
    // }));
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

    // setSelectedProject((prevProject) => ({
    //   ...prevProject,
    //   tasks: prevProject.tasks.filter((task) => task.id !== taskId),
    // }));
  }

  function handleProjectDelete(projectId) {
    setProjects((prevProjects) =>
      prevProjects.projects.filter((project) => project.id !== projectId)
    );
    // setShowEmpty(true);
  }

  return (
    <main className="flex pt-8 h-screen gap-8">
      <Sidebar
        onAddProjectClick={handleOpenForm}
        onOpenProject={openProject}
        projects={projects.projects}
      />
      {projects &&
        projects.projects &&
        projects.projects.length === 0 &&
        !openForm && <EmptyState onOpenForm={handleOpenForm} />}
      {openForm && (
        <CreateProjectForm
          onButtonClick={handleCloseForm}
          onProjectSubmit={handleSubmit}
        />
      )}
      {projects.selectedProject && !openForm && (
        <Project
          onAddTask={handleAddTask}
          onClearTask={handleClearTask}
          project={projects.selectedProject}
          tasks={projects.tasks}
          onProjectDelete={handleProjectDelete}
        />
      )}
    </main>
  );
}

export default App;
