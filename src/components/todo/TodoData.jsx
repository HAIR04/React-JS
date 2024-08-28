const TodoData = (props) =>{
    //Props : là 1 biến object
    
    //Code tối ưu
    const {todoList , deleteTodo} = props

    //Code cơ bản
    // const name = props.name
    // const age = props.age
    // const data = props.data
    const deleteClick = (id) =>{
        deleteTodo(id)
    }
    return(
        <div className="todo-data">
            {todoList.map((item , index) => {
                return(
                    <div className={`todo-item`} key={item.id}>
                     <div style={{borderBottom : "1px solid black" , 
                             padding: "10px 5px " , width: "90%"}}>{item.name} 
                     </div>
                        <button onClick={()=> deleteClick(item.id)}>Delete</button>                  
                    </div>
                )
            })}
        
       
   </div>
    )
}

export default TodoData 