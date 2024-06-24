import { useState } from "react";
import Task from "./Task";

export default function Project({
  project,
  tasks,
  onAddTask,
  onClearTask,
  onProjectDelete,
}) {
  console.log("project is rendered");
  const [taskValue, setTaskValue] = useState("");
  function handleInput(evt) {
    setTaskValue(evt.target.value);
  }

  function handleAddTask() {
    onAddTask(project.id, taskValue);
    setTaskValue("");
  }

  function handleClearTask(taskId) {
    onClearTask(taskId);
  }

  function handleProjectDelete() {
    onProjectDelete(project.id);
  }

  return (
    <section className="w-[35rem] mt-16">
      <div className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h2>
          <button
            type="button"
            onClick={handleProjectDelete}
            className="text-stone-600 hover:text-stone-950"
          >
            delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{project.dueDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-stone-700 mb-4">Task</h3>
        <div className="flex items-center gap-4">
          <input
            onInput={handleInput}
            value={taskValue || ""}
            type="text"
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          />
          <button
            type="button"
            onClick={handleAddTask}
            className="text-stone-700 hover:text-stone-950"
          >
            add task
          </button>
        </div>

        {(!tasks || tasks.length === 0) && (
          <p className="text-stone-800 my-4">
            This project does not have tasks
          </p>
        )}
        {tasks && tasks.length > 0 && (
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map(
              (task) =>
                task.projectId === project.id && (
                  <Task
                    key={task.id}
                    task={task}
                    onClearTask={handleClearTask}
                  />
                )
            )}
          </ul>
        )}
      </div>
    </section>
  );
}
