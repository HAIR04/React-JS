import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from './assets/react.svg'
import { useState } from "react"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
//component = html + css + js
//Cú pháp arrow function () =>{}
// Luôn viết hoa chữ cái đầu của Function


const App = () => {
  const [todoList , setTodoList] = useState([  ])
 
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

    const deleteTodo = (id) => {
                              //Lọc : xóa đi phần tử có id = id được truyền vào và 
                              //chỉ giữ lại những id khác với id được truyền vào
      const newTodo = todoList.filter(item => item.id !== id)
       setTodoList(newTodo)
    }
  return (
    <>
    <Header/>
    <div className="todo-container">

      <div className="todo-title">TODO LIST</div>

        <TodoNew
          addNewTodo = {addNewTodo}/>

  {/*Cách tối ưu  */}
  {/* Nếu độ dài > 0 thì thực thi phần này */}
     {todoList.length > 0 ?
       <TodoData
       todoList = {todoList}
       deleteTodo = {deleteTodo}
       />
      // Còn không thì thự thi phần này
       :
       <div className="todo-image">
        <img src={reactLogo} className="logo"></img>
       </div>
        }

{/* CÁCH newbie */}
          {/* Nếu độ dài > 0 thì mới hiện thanh data */}
      {/* {todoList.length > 0 && 
       <TodoData
       todoList = {todoList}
       />
       }
       {/* DDkien : nếu độ dài của totolist = 0 thì hiển thị ra còn không thì ẩn  */}
      {/* Câu điều kiện : nếu... thì (&&) */}
    {/* {todoList.length === 0 && 
       <div className="todo-image">
        <img src={reactLogo} className="logo"></img>
       </div>
       } */} 
    </div>
    <Footer/>
    </>
  )
}

export default App
