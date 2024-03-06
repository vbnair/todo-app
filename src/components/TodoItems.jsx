/* eslint-disable react/prop-types */
import './Styles.css'
import { ImCross } from "react-icons/im";
import { GoCheckCircleFill } from "react-icons/go";
import { MdRadioButtonUnchecked } from "react-icons/md";

const TodoItems = ({no, display, text, setToDos}) => {
 // Function to delete a todo
const deleteTodo =(no)=>{
  let data = JSON.parse(localStorage.getItem("todos"))
  data = data.filter((todo) => todo.no!==no)
  setToDos(data)
}
 // Function to toggle the completion status of a todo
const toggle =(no)=>{
let data = JSON.parse(localStorage.getItem("todos"))
for(let i=0; i < data.length; i++){
  if(data[i].no===no){
    if(data[i].display==""){
      data[i].display ="line-through"
    }
    else{data[i].display =""}
    break;
  }
}
setToDos(data)
}

  return (
    <div className='todo-items'>
      <div className={`todo-items-cont ${display}`} onClick={()=>{toggle(no)}}>
        {display ===""? <MdRadioButtonUnchecked />: <GoCheckCircleFill />}
        
        <div className="todo-items-text">{text}</div>
       </div>
        <ImCross className='todo-item-cross' onClick={() => {deleteTodo(no)}} />
    </div>
  )
}

export default TodoItems
