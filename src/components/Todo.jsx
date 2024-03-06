import { useEffect, useRef, useState } from 'react'
import './Styles.css'
import TodoItems from './TodoItems'



let count =0

const Todo = () => {
  // State for managing todos
  const [todos, setToDos] = useState([])
  const inputRef = useRef(null)
  // Function to add a new todo
  const add =() =>{
  setToDos([...todos,{no: count++, text:inputRef.current.value, display:""}])
  inputRef.current.value = ""  
  localStorage.setItem("todos_count", count)
}
// Load todos from local storage on component mount
useEffect(()=>{
  setToDos(JSON.parse(localStorage.getItem("todos")))
  count = localStorage.getItem("todos_count")
}, [])
// Save todos to local storage when todos state changes
useEffect(() =>{
  setTimeout(()=>{
    // console.log(todos)
    localStorage.setItem("todos", JSON.stringify(todos))
  }, 100)
},[todos])

  return (
    <div className='todo'>
      <div className="todo-header">
        To-Do List
      </div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder='Add your Task' className='todo-input'/>
      <div onClick={()=> {add()}} className="todo-add-btn">ADD</div>
      </div>
      <div className="todo-list">
        {todos.map((item, index)=>{
          return <TodoItems key={index} setToDos={setToDos} no={item.no} display={item.display} text={item.text}/>
        })}
      </div>
    </div>
  )
}

export default Todo
