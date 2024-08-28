const TodoData = (props) =>{
    //Props : là 1 biến object
    
    //Code tối ưu
    const {name , age , data} = props

    //Code cơ bản
    // const name = props.name
    // const age = props.age
    // const data = props.data
    console.log(props)
    return(
        <div className="todo-data">
            <div>Tôi tên là : {name}</div>
        <div>Học bài</div>
       <div>Chơi game</div>
       <div>
        {JSON.stringify(props.todoList)}
       </div>
   </div>
    )
}

export default TodoData