export default function Task({ task, onClearTask }) {
  function handleClearTask(evt) {
    const taskId = evt.target.dataset.target;
    onClearTask(taskId);
  }

  return (
    <li key={task.id} className="flex justify-between my-4">
      <span>{task.name}</span>
      <button
        onClick={handleClearTask}
        data-target={task.id}
        type="button"
        className="text-stone-700 hover:text-red-500"
      >
        Clear
      </button>
    </li>
  );
}
