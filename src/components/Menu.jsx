export default function Menu({
  handleClickProjectButton,
  userData,
  handleioClickedProject,
}) {
  function handleButtonClick(index) {
    handleioClickedProject(index);
  }
  return (
    <div className="w-[20%] pt-44 bg-gray-300 h-screen px-4">
      <h1>Your Project</h1>
      <button onClick={handleClickProjectButton}>+ Add Project</button>
      <div className="flex flex-col-reverse items-start">
        {userData.map((user, index) => {
          return (
            <button key={index} onClick={() => handleButtonClick(index)}>
              {user.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
