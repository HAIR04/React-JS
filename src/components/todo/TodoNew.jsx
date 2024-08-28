import { useState } from "react"

const TodoNew = (props) => {

    //useState hook
    // const ValueInput = "okd"
        //Giá trị ban đầu      //Đây là function
    const [ValueInput ,          setValuaInput]     = useState("sad")

    const {newFunction} = props
    
    const handleClick = ()=>{
       console.log("Check valueinput" , ValueInput)
    }
   const handleOnChange = (name) =>{
        setValuaInput(name)
    }
    return(
        <div className="todo-new">
        <input  type="text"
        onChange={(event) => handleOnChange(event.target.value)}/>
       
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