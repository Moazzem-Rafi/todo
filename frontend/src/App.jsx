import {useState} from 'react'
import axios from 'axios'

function App() {

let [task,setTask] = useState('')
let [priority,setPriority] = useState('')

let handleClick = async ()=>{
 let data = await axios.post ('http://localhost:5000/create/todo',{
  "task" : task,
  "priority" : priority
})
}

  return (
    <>
      <h1>Todo</h1>
      <input onChange={handleTaskChange} type="text" />
      <select onChange={handleOptionChange}>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      <button onClick={handleClick}>submit</button>
    </>
  )
}

export default App
