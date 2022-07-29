import React from "react";

function TodoTask(props) {

    const handleClick = (e) => {
        e.preventDefault();
        props.handleToggle(e.currentTarget.id);

    }


    return (
        <div id={props.todo.id} key={props.todo.id} name="todo" value={props.todo.id} onClick={handleClick} className={props.todo.complete ? "todo strike" : "todo"}>


            {props.todo.taskName}
        </div>
    )
}
export default TodoTask