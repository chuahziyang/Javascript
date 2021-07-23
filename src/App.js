import Header from "./components/Header"
import Tasks from "./components/Tasks"
import {useState} from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:"Doctors Appointment",
        day:"Feb 5th at 2:30pm",
        reminder:true,
    },
    {
        id:2,
        text:"School",
        day:"Feb 5th at 2:30pm",
        reminder:true,
    }
])

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id
  ? {
    ...task, reminder:!task.reminder
  }:task
  ))
}

  return (
    <div className="App">
      <Header title="asdasd"/>
      <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      />
    </div>
  )
}

export default App;
