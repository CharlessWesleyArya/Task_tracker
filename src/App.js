import Header from "./components/Header";
import { useState, useEffect } from "react"
import Tasks from "./components/Tasks";
import Addtask from "./components/Addtask";
import Footer from "./components/Footer";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)

    }
    getTasks()
  }, [])

  //fetch
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  //Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])

    /* const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask]) */
  }

  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <Addtask onAdd={addTask} />}
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : ('No Tasks to Show')}
        <Footer />
      </div>
  );
}

export default App;
