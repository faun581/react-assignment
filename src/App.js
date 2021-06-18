import Header from "./components/Header";
import { useEffect, useState } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Counter from "./components/Counter";
import Button from "./components/Button";

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [showCounter, setShowCounter] = useState(false)
  const [num, setNum] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "frist"
    },
    {
      "id": 2,
      "text": "second"
    }
  ])

  const incNum = () => setNum(num + 1)
  const decNum = () => setNum(num - 1)
  const incOddNum = () => { if((num % 2) === 1) setNum(num + 1)}
  // const asyInc = () => {
  //   return new Promise(resolve => setTimeout(resolve, 1000))
  // }
  
  useEffect(() => {
    if(isPlaying){
      let timeout = setTimeout(() => setNum(num + 1), 1000)
      return () => clearTimeout(timeout)
    }
  })

  const addTask = (task) => {
    const id = Math.floor(Math.random() *
    1000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  const sortTask = () => {
    const sortTasks = [...tasks].sort((a,b) => (a.text > b.text) ? 1 :
    ((b.text > a.text) ? -1 : 0))
    setTasks(sortTasks)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">

      <Button
        color={showCounter ? 'red' : 'green'}
        text={showCounter ? 'Hide' : 'Show Counter'}
        onClick={() => setShowCounter(!showCounter)} 
        showCounter={showCounter}
      /> 

      {showCounter && <Counter count={num} onInc={incNum} 
        onDec={decNum} incOdd={incOddNum} 
        play={() => setIsPlaying(!isPlaying)} 
        showStop={isPlaying} 
         />
      }

      <Header onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}/>
      
      {showAddTask && <div className='TdList'>
        <AddTask onAdd={addTask} onSort={sortTask} />
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} /> ): 
        ('No Tasks To Show')}
      </div>
      }
      
    </div>
  );
}

export default App;
