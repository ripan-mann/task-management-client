import React, { useState } from "react";
import TodoTask from "./todo-task"


const SearchForm = props => {
    const [searchInput, setSearchInput] = useState('');
    const handleSearcInput = event => {
        setSearchInput(event.currentTarget.value);
    }
    // const handleSearch = event => {
    //     event.preventDefault();
    //     // props.addTask(searchInput);
    //     const lowerSearchInput = searchInput.toLowerCase();
    //     // console.log(lowerSearchInput);
    //     setSearchInput('');
    // }
    return (
        <div>
            <form>
                <input type="text" value={searchInput} onChange={handleSearcInput} placeholder="Search for a Todo Task" />
                {/* <button onClick={handleSearch}>Search</button> */}
            </form>
            {props.todoList.filter(todo => {
                if (searchInput === '') {
                    return todo;
                } else if (todo.taskName.toLowerCase().includes(searchInput.toLowerCase())) {
                    return todo;
                }
            }).map(todo => {
                return <TodoTask todo={todo} handleToggle={props.handleToggle} />
            })}
        </div>
    );
}

export default SearchForm;