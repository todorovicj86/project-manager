import { useRef } from 'react';

export default function NewTask({ onAddTask }) {
    const taskValue = useRef();

    function handleAddTask() {
        onAddTask(taskValue.current.value);
        taskValue.current.value = '';
    }

    return (
        <div className="flex items-center gap-4">
            <input type="text" ref={taskValue} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
            <button type="button" onClick={handleAddTask} className="text-stone-700 hover:text-stone-950">
                add task
            </button>
        </div>
    );
}
