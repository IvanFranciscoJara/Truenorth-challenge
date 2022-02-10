import { createPortal } from 'react-dom'
import './sass/modal.sass'

const Modal = ({ open, task, close, toogleTask }) => {
  return (
    open &&
    createPortal(
      <div className="container-modal">
        <h4 className="number">Task #{task.index}</h4>
        <h4 className="uuid">Uuid: {task.uuid}</h4>
        <h5 className="title">Title: {task.title}</h5>
        <div className="options">
          <button className={`btn ${task.done ? 'red' : 'green'}`} onClick={toogleTask}>
            <p>{task.done ? '❌' : '✅'}</p>
            <p>{task.done ? 'Mark as uncompleted' : 'Mark as Completed'}</p>
          </button>
          <button className="btn red" onClick={close}>
            Close
          </button>
        </div>
      </div>,
      document.getElementById('portal_one')
    )
  )
}

export default Modal
