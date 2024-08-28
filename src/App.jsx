import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from './assets/react.svg'
//component = html + css + js
//Cú pháp arrow function () =>{}
// Luôn viết hoa chữ cái đầu của Function


const App = () => {
   const name = "Hoàng Hải Đặng"
   const age    = 25
   const data = {
    phone : "0964445201",
    email : "okds@gmail.com"
   }
  return (
    
    <div className="todo-container">

      <div className="todo-title">TODO LIST</div>

        <TodoNew/>

       <TodoData
       name = {name}
       age = {age}
       data = {data}
       />

       <div className="todo-image">
        <img src={reactLogo} className="logo"></img>
       </div>
    </div>
  )
}

export default App
