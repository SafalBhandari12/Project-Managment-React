import { useState } from "react";
import ContentArea from "./components/ContentArea";
import Menu from "./components/Menu";

function App() {
  // This state is used to check if the user clicked the add project button or not. The value is then sent to the contentArea and on the basis of the boolean value the content is displayed dynamically.
  const [isAddingProject, setIsAddingProject] = useState(false);

  const [userData, setUserData] = useState([]);

  // This state is to check if used clicked the project that was created and also have the index of the button clicked
  const [ioClickedProject, setIOClickedProject] = useState([false, undefined]);

  // If the user has clicked certain project it holds the index of that button and sets value to true which opens the window allowing for user to enter the new tasks
  function handleioClickedProject(index) {
    setIOClickedProject((prevValue) => [!prevValue[0], index]);
  }

  // When the button is clicked isAddingProject is true hence the enter project detial templates work
  function handleClickProjectButton() {
    setIsAddingProject((prevValue) => !prevValue);
  }

  // When save is clicked on the enter project details component the details of the project is saved
  function handleSaveProjectButton({ title, description, date, index, task }) {
    console.log(title, description, date, index, task);
    if (typeof index == "undefined") {
      setUserData((prevData) => [
        ...prevData,
        { title, description, date, task: [] },
      ]);
      handleClickProjectButton();
    } else if (typeof task !== "undefined") {
      setUserData((prevData) => {
        let newData = [...prevData];
        newData[index].task = task;
        return newData;
      });
    }
  }

  return (
    <div className="flex ">
      <Menu
        handleClickProjectButton={handleClickProjectButton}
        userData={userData}
        handleioClickedProject={handleioClickedProject}
      />
      <ContentArea
        isAddingProject={isAddingProject}
        handleSaveProjectButton={handleSaveProjectButton}
        handleCancelProjectButton={handleClickProjectButton}
        ioClickedProject={ioClickedProject}
        userData={userData[ioClickedProject[1]]}
      />
    </div>
  );
}

export default App;
