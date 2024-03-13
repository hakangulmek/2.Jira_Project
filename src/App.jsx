import { useEffect, useState } from "react";
import "./App.css";
import Task_Create from "./Component/taskCreate";
import Task_List from "./Component/taskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTask = [...tasks, response.data];
    setTasks(createdTask);
  };
  const fetchTasks = async () => {
    await axios.get("http://localhost:3000/tasks");
    debugger;
    setTasks(response.data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  const deleteTaskById = async (id) => {
    const response = await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id == id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  return (
    <div className="App">
      <Task_Create onCreate={createTask} />
      <h1>GÖREVLER</h1>
      <Task_List
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
