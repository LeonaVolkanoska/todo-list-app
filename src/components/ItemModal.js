import { useState } from "react";
function AddItemModal({ tasks, setTasks, setIsVisible, isEditTask, saveTask }) {
  const [text, setText] = useState(isEditTask ? isEditTask.text : "");

  function addTask(e) {
    if (!text) return;

    const newTask = {
      id: isEditTask.id,
      text,
      completed: isEditTask ? isEditTask.completed : false,
    };

    saveTask(newTask);
    setText("");
    setIsVisible(false);
  }
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        setIsVisible(false);
      }}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h1>{isEditTask.id ? "Edit Todo Item" : "Add Todo Item"}</h1>
        </div>
        <div className="modal-body">
          <input
            placeholder="Add your todo..."
            className="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button onClick={addTask}>
            {isEditTask.id && isEditTask.id ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItemModal;
