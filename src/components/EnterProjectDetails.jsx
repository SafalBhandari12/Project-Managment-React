import { useRef } from "react";

// This component is used to enter the project name,description and date if we clicked is adding button

export default function EnterProjectDetails({
  handleSaveProjectButton,
  handleCancelProjectButton,
}) {
  const buttonStyle = "py-2 px-4 bg-slate-300";

  //   this function is used to save the title,description and date after the user has clicked the save button.
  function handleClickSave() {
    let titleValue = title.current.value;
    let descriptionValue = description.current.value;
    let dateValue = date.current.value;

    if (
      titleValue.length > 0 &&
      descriptionValue.length > 0 &&
      dateValue.length > 0
    ) {
      handleSaveProjectButton({
        title: titleValue,
        description: descriptionValue,
        date: dateValue,
      });
    } else {
      alert("Please fill all the data properly");
    }
  }
  // This is used to get the value inside the input boxes to be updated to the databases
  let title = useRef();
  let description = useRef();
  let date = useRef();
  return (
    <div className="mt-36 p-7 space-y-5">
      <div className="flex justify-end space-x-2">
        <button className={buttonStyle} onClick={handleCancelProjectButton}>
          Cancel
        </button>
        <button className={buttonStyle} onClick={handleClickSave}>
          Save
        </button>
      </div>
      <div>
        <p>Title</p>
        <input type="text" ref={title} required />
      </div>
      <div>
        <p>Description</p>
        <input type="text" ref={description} className="w-[37rem]" required />
      </div>
      <div>
        <p>Date</p>
        <input type="date" name="date" id="date" ref={date} required />
      </div>
    </div>
  );
}
