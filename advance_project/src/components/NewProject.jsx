import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      desc: enteredDesc,
      dueDate: enteredDueDate,
    });
  }

  function handleCancel(){
    onCancel();
  }
  return (
    <>
      <Modal ref={modal} buttonLabel="Close">
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-500 mb-4'>oops... look like you forget to enter value</p>
        <p className='text-stone-500 mb-4'>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={handleCancel} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-stone-800 rounded-md text-stone-50 hover:bg-stone-950 px-6 py-2"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" ref={titleRef} />
          <Input label="Description" textarea ref={descRef} />
          <Input type="date" label="Due Date" ref={dueDateRef} />
        </div>
      </div>
    </>
  );
}
