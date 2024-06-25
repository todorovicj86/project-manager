import Task from './Task';
import NewTask from './NewTask';

export default function Tasks({ tasks, projectId, hasTasks, onAddTask, onClearTask }) {
    function handleAddTask(taskValue) {
        onAddTask(projectId, taskValue);
    }

    function handleClearTask(taskId) {
        onClearTask(taskId);
    }

    return (
        <section>
            <h3 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h3>
            <NewTask onAddTask={handleAddTask} />

            {(!tasks || tasks.length === 0 || !hasTasks) && <p className="text-stone-800 my-4">This project does not have tasks</p>}
            {tasks && tasks.length > 0 && hasTasks && <ul className="p-4 mt-8 rounded-md bg-stone-100">{tasks.map((task) => task.projectId === projectId && <Task key={task.id} task={task} onClearTask={handleClearTask} />)}</ul>}
        </section>
    );
}
