export default function Template(){
    // This is the standard template that is displayed if the user has just entered the user or no project is selected
    return(
        <div className="mt-32 p-4">
            <h1>No project selected</h1>
            <p>Select a project or  get started with a new one</p>
            <button>Create a New Project</button>
        </div>
    )
}