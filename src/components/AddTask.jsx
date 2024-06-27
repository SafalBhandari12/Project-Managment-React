import { useRef } from "react";

export default function AddTask({
  userData,
  handleSaveProjectButton,
  ioClickedProject,
}) {
  let index = ioClickedProject[1];
  let taskInput = useRef();
  function handleClick(index, task) {
    handleSaveProjectButton({ index: index, task: task });
  }
  return (
    <>
      <div>
        <h1>{userData.title}</h1>
        <h3>{userData.description}</h3>
        <p>{userData.date}</p>
      </div>
      <div>
        <h1>Tasks</h1>
        <input type="text" className="mr-4" ref={taskInput} />
        <button onClick={() => handleClick(index, taskInput.current.value)}>
          Add task
        </button>
      </div>
    </>
  );
}
