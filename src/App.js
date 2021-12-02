import Header from "./components/Header";
import { useState } from "react"
import Tasks from "./components/Tasks";
import Addtask from "./components/Addtask";
function App() {
  const [tasks,setTasks]=useState([
    {
        id:1,
        text:'Practice Time',
        day:'Day Time',
        reminder:'false'
    },
    {
        id:2,
        text:'Movie Time',
        day:'Nov 30',
        reminder:'true'
    },
    {
        id:3,
        text:'Game Time',
        day:'All day',
        reminder:'true'
    }
])

//delete task
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}
  return (
    <div className="container">
     <Header />
     <Addtask />
     {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask}/> :'No Tasks to Show'}
    </div>
  );
}

export default App;
