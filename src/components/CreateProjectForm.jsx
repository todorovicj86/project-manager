import { useRef } from "react";
import Modal from './Modal';
import Input from './Input';

export default function CreateProjectForm({ onButtonClick, onProjectSubmit }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const dialog = useRef();

  function handleFormSubmit(evt) {
    evt.preventDefault();
    const updatedProjectInfo = {
      id: Date.now().toString(),
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    const isNotValidForm = !title.current.value || !description.current.value || !dueDate.current.value;

    if(isNotValidForm) {
      handleOpenDialog();
      return;
    }

    onProjectSubmit({ ...updatedProjectInfo });
  }

  function handleOpenDialog() {
    dialog.current.openModal();
  }

  return (
    <>
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
       <Input label="Title" name="title" type="text" ref={title} />
      </div>
      <div className="flex flex-col gap-1 my-4">
        <Input name="description" label="Description" ref={description} textarea/>
      </div>
      <div className="flex flex-col gap-1 my-4">
        <Input label="Due Date" name="dueDate" type="date" ref={dueDate} />
      </div>
    </form>
    <Modal ref={dialog}>
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
      <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
      <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
    </Modal>
    </>
  );
}
