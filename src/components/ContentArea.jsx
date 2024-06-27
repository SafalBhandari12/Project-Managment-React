import AddTask from "./AddTask";
import EnterProjectDetails from "./EnterProjectDetails";
import Template from "./Template";

export default function ContentArea({
  isAddingProject,
  handleSaveProjectButton,
  handleCancelProjectButton,
  ioClickedProject,
  userData,
}) {
  // This component is used to handle the main content area. On the first landing the content area is the template. If we click on is adding project it shows the project detial page where we can edit the project. And if we have clicked any project button we get entertask page777
  let display;

  display = <Template />;
  if (ioClickedProject[0]) {
    display = (
      <AddTask
        userData={userData}
        handleSaveProjectButton={handleSaveProjectButton}
        ioClickedProject={ioClickedProject}
      />
    );
  }
  if (isAddingProject) {
    display = (
      <EnterProjectDetails
        handleSaveProjectButton={handleSaveProjectButton}
        handleCancelProjectButton={handleCancelProjectButton}
      />
    );
  }

  return <div className="w-[80%] bg-gray-600 h-screen">{display}</div>;
}
