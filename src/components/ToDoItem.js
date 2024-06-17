import React from "react";
import "../assets/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

function ToDoItem({ task, taskCompleted, deleteTask, editTask }) {
  function completed() {
    taskCompleted(task.id);
  }
  console.log(task);
  return (
    <div className="todo-item">
      <div className="check-item">
        <input type="checkbox" checked={task.completed} onChange={completed} />
        <span className={task.completed ? "completed" : ""}>{task.text}</span>
      </div>
      <div>
        <button className="button-item" onClick={() => deleteTask(task.id)}>
          <FontAwesomeIcon icon={faTrash} size="xl" />
        </button>
        <button className="button-item" onClick={() => editTask(task)}>
          <FontAwesomeIcon icon={faPen} size="xl" />
        </button>
      </div>
    </div>
  );
}
export default ToDoItem;
