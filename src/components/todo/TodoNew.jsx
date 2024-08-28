const TodoNew = (props) => {
    const {newFunction} = props
    
    const handleClick = ()=>{
        alert("Click click")
    }
   const handleOnChange = (name) =>{
        console.log("ok" , name)
    }
    return(
        <div className="todo-new">
        <input  type="text"
        onChange={(event) => handleOnChange(event.target.value)}/>
       
        <button 
        style={{cursor : "pointer"}}
        onClick={handleClick} >ADD</button>
        
      </div>
      
    )    
}
export default TodoNew