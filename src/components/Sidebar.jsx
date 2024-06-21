export default function Sidebar({
  onAddProjectClick,
  projects,
  onOpenProject,
}) {
  function handleClick(evt) {
    const projectId = evt.target.dataset.target;
    onOpenProject(projectId);
  }
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <button
        onClick={onAddProjectClick}
        type="button"
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        + add project
      </button>
      <ul className="mt-8">
        {projects &&
          projects.length > 0 &&
          projects.map((project) => (
            <li key={project.id} id={project.id}>
              <button data-target={project.id} onClick={handleClick}>
                {project.title}
              </button>
            </li>
          ))}
      </ul>
    </aside>
  );
}
