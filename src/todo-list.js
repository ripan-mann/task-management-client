import React from "react";

import TodoTask from "./todo-task"

function TodoList(props) {
    return (
        <div>
            {props.todoList.map(todo => {
                return <TodoTask todo={todo} handleToggle={props.handleToggle} />
            })}
            <button onClick={props.clearCompletedTask} >
                Clear Completed Tasks
            </button>
        </div>
    )
}

export default TodoList