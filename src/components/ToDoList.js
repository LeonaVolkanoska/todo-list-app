import ToDoItem from "./ToDoItem";
import "../assets/App.css";
import { useState } from "react";
import ItemModal from "./ItemModal";
import FilterTask from "./FilterTask";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isEditTask, setIsEditTask] = useState({ id: null, text: "" });
  const [filter, setFilter] = useState("all");

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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "uncompleted") return !task.completed;
    return true;
  });

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
        <div className="add-filter-task-container">
          <button className="add-task" onClick={addTask}>
            Add Task
          </button>
          <FilterTask filter={filter} setFilter={setFilter} />
        </div>

        <div className="tasks-container">
          {filteredTasks.map((task) => (
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
