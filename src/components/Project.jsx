import Tasks from './Tasks';

export default function Project({ project, tasks, onAddTask, onClearTask, onProjectDelete }) {
    console.log('project is rendered');
    const hasTasks = tasks.find((task) => task.projectId === project.id);

    function handleProjectDelete() {
        onProjectDelete(project.id);
    }

    return (
        <section className="w-[35rem] mt-16">
            <div className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h2>
                    <button type="button" onClick={handleProjectDelete} className="text-stone-600 hover:text-stone-950">
                        delete
                    </button>
                </div>
                <p className="mb-4 text-stone-400">{project.dueDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </div>
            <Tasks tasks={tasks} hasTasks={hasTasks} projectId={project.id} onAddTask={onAddTask} onClearTask={onClearTask} />
        </section>
    );
}
