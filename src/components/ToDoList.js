import ToDoItem from "./ToDoItem";
import "../assets/App.css";
import { useState } from "react";
import ItemModal from "./ItemModal";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isEditTask, setIsEditTask] = useState({ id: null, text: "" });

  function taskCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
          return task;
        } else {
          return task;
        }
      })
    );
  }

  function deleteTask(id) {
    setTasks((arr) => arr.filter((task) => task.id !== id));
  }

  function saveTask(task) {
    if (task.id) {
      setTasks((arr) => arr.map((t) => (t.id === task.id ? task : t)));
    } else {
      task.id = Date.now();
      task.completed = false;
      setTasks([...tasks, task]);
    }
    setIsVisible(false);
  }

  function editTask(task) {
    setIsEditTask(task);
    setIsVisible(true);
  }

  function addTask() {
    setIsEditTask({ id: null, text: "" });
    setIsVisible(true);
  }

  return (
    <>
      {isVisible && (
        <ItemModal
          tasks={tasks}
          setTasks={setTasks}
          setIsVisible={setIsVisible}
          isEditTask={isEditTask}
          saveTask={saveTask}
        />
      )}

      <h1 className="title">To-Do List</h1>

      <div className="todo-list">
        <div className="add-task-container">
          <button className="add-task" onClick={addTask}>
            Add Task
          </button>
        </div>

        <div className="tasks-container">
          {tasks.map((task) => (
            <ToDoItem
              deleteTask={deleteTask}
              editTask={editTask}
              key={task.id}
              task={task}
              taskCompleted={taskCompleted}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default ToDoList;
