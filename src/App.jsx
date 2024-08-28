import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from './assets/react.svg'
import { useState } from "react"
//component = html + css + js
//Cú pháp arrow function () =>{}
// Luôn viết hoa chữ cái đầu của Function


const App = () => {
  const [todoList , setTodoList] = useState([
    {id: 1 , name : "Thức dậy"},
    {id: 2 , name : "Học bài"},
  ])
   const name = "Hoàng Hải Đặng"
   const age    = 25
   const data = {
    phone : "0964445201",
    email : "okds@gmail.com"
   }
   const addNewTodo = (name)=>{
    const newTodo = {
      id: randomIntFromInterval(1,1000),
      name : name
    }
    setTodoList([...todoList, newTodo])
   }
   const randomIntFromInterval= (min, max)=> { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
  return (
    
    <div className="todo-container">

      <div className="todo-title">TODO LIST</div>

        <TodoNew
          addNewTodo = {addNewTodo}/>

       <TodoData
       name = {name}
       age = {age}
       data = {data}
       todoList = {todoList}
    
       />

       <div className="todo-image">
        <img src={reactLogo} className="logo"></img>
       </div>
    </div>
  )
}

export default App
