export default function NewTask({onInputChange, onAddTask, taskValue}) {
    return (
    <div className="flex items-center gap-4">
        <input
          onInput={onInputChange}
          value={taskValue || ""}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          type="button"
          onClick={onAddTask}
          className="text-stone-700 hover:text-stone-950"
        >
          add task
        </button>
      </div>
    )
}