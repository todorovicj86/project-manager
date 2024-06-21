import { useState, useRef } from "react";
export default function CreateProjectForm({ onButtonClick, onProjectSubmit }) {
  const [projectInfo, setProjectInfo] = useState({
    title: "",
    description: "",
    dueDate: "",
    tasks: [],
  });
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleFormSubmit(evt) {
    evt.preventDefault();
    const updatedProjectInfo = {
      ...projectInfo,
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    setProjectInfo(updatedProjectInfo);
    onProjectSubmit({ ...updatedProjectInfo, id: Date.now().toString() });
  }

  return (
    <form className="w-[35rem] mt-16" onSubmit={handleFormSubmit}>
      <div className="flex items-center justify-end gap-4 my-4">
        <button type="button" onClick={onButtonClick}>
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </div>
      <div className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          title
        </label>
        <input
          name="title"
          ref={title}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          description
        </label>
        <textarea
          name="description"
          ref={description}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      </div>
      <div className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          due date
        </label>
        <input
          name="dueDate"
          ref={dueDate}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="date"
        />
      </div>
    </form>
  );
}
