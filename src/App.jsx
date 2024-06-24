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
    const newTask = {
      id: `task-${Date.now().toString()}`,
      name: taskValue,
      projectId: projectId,
    };

    setProjects((prevState) => ({
      ...prevState,
      tasks: [newTask, ...prevState.tasks],
    }));
  }

  function handleClearTask(taskId) {
    setProjects((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  }

  function handleProjectDelete(projectId) {
    setProjects((prevState) => ({
      ...prevState,
      selectedProject: null,
      projects: prevState.projects.filter(
        (project) => project.id !== projectId
      ),
    }));
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
