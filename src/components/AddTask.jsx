import { useRef } from "react";

export default function AddTask({
  userData,
  handleSaveProjectButton,
  ioClickedProject,
}) {
  let userDataIndex = ioClickedProject[1];
  let taskInput = useRef();

  function handleAddNewTask(userDataIndex, task) {
    let newTasks = [...userData.task, task];
    handleSaveProjectButton({ index: userDataIndex, task: newTasks });
    taskInput.current.value = "";
  }
  function handleDeleteTask(index) {
    let newTasks = [...userData.task].filter((task, idx) => {
      return idx != index;
    });
    console.log(index, newTasks);
    handleSaveProjectButton({ index: userDataIndex, task: newTasks });
  }
  return (
    <div className="p-6">
      <div>
        <h1>{userData.title}</h1>
        <h3>{userData.description}</h3>
        <p>{userData.date}</p>
      </div>
      <div>
        <h1>Tasks</h1>
        <input type="text" className="mr-4" ref={taskInput} />
        <button
          onClick={() =>
            handleAddNewTask(userDataIndex, taskInput.current.value)
          }
        >
          Add task
        </button>
      </div>
      <div className="flex flex-col-reverse items-start">
        {userData.task.map((task, index) => (
          <button
            key={index}
            onClick={() => {
              handleDeleteTask(index);
            }}
          >
            {task}
          </button>
        ))}
      </div>
    </div>
  );
}
