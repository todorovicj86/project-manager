import Sidebar from "./components/Sidebar";
import CreateProjectForm from "./components/CreateProjectForm";
import Project from "./components/Project";
import logoImg from "./assets/logo.png";
import { useState } from "react";

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [projects, setProjects] = useState([]);

  function handleOpenForm() {
    setOpenForm(true);
  }

  function handleCloseForm() {
    setOpenForm(false);
  }

  function handleSubmit(project) {
    console.log(project);
    setProjects((prevProjects) => [...prevProjects, project]);
    console.log(projects);
    setOpenForm(false);
  }

  return (
    <main className="flex pt-8 h-screen gap-8">
      <Sidebar onAddProjectClick={handleOpenForm} projects={projects} />
      {!openForm && (
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
    </main>
  );
}

export default App;
