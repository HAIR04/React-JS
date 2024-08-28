import { useState } from "react"

const TodoNew = (props) => {

    //useState hook
    // const ValueInput = "okd"
        //Giá trị ban đầu      //Đây là function
    const [ValueInput ,          setValueInput]     =        useState("")

    const {addNewTodo} = props
    
    const handleClick = ()=>{
        addNewTodo(ValueInput)
        setValueInput("")
    }
   const handleOnChange = (name) =>{
        setValueInput(name)
    }
    return(
        <div className="todo-new">
        <input  type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        value={ValueInput}
        />
       
        <button 
        style={{cursor : "pointer"}}
        onClick={handleClick} >ADD</button>
        <div>
            {ValueInput}
        </div>
      </div>
      
    )    
}
export default TodoNew