import { useEffect, useState } from 'react'
import Modal from '../components/modal'
import { generateFakeData } from '../globalFiles/utils'
import './sass/App.sass'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(generateFakeData()) // generate fake data
  }, [])

  const [openModal, setOpenModal] = useState(false)
  const [selectedTask, setSelectedTask] = useState({ uuid: 'fserdsds', title: 'task number 8' })

  const reduceTitleLength = (title) => {
    return title.length > 14 ? title.substring(0, 14) + '...' : title
  }

  const handleOnClick = (index, task) => {
    setSelectedTask({ ...task, index })
    setOpenModal(true)
  }

  const toogleTask = () => {
    const currentUuid = selectedTask.uuid
    const newTasks = tasks.map((task) => {
      const completed = task.uuid === currentUuid
      return completed ? { ...task, done: !task.done } : task
    })
    setTasks(newTasks)
    setOpenModal(false)
  }

  return (
    <div className="App">
      <Modal open={openModal} task={selectedTask} close={() => setOpenModal(false)} toogleTask={toogleTask} />
      <header className="App-header">
        <h2>Tasks List</h2>
      </header>
      <div className="tasks">
        {tasks.map((task, index) => (
          <div
            key={task.uuid}
            className="task"
            onClick={() => handleOnClick(index, task)}
            title={task.done ? '✅ task completed' : '❌ task uncomplete'}
          >
            <h4 className="task__number">
              <span>{task.done ? '✅' : '❌'}</span>
              Task #{index}
            </h4>
            <h5 className="task__title">{reduceTitleLength(task.title)}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
