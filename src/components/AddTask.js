import { useState } from 'react'

const AddTask = ({ onAdd, onSort }) => {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text })

    setText('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='dropdown' >
        <input type='submit' value='Add' className='btn btn-block' />
        <div className='dropdown-content'>
          <button onClick={onSort} >Sort A-Z</button>
          <button onClick={onSort} >Sort Z-A</button>
        </div>
      </div>
      
    </form>
  )
}

export default AddTask
