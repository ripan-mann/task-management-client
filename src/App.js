import React, { useState, useEffect } from "react";
import TodoForm from "./todo-form";
import TodoList from "./todo-list";
import Axios from "axios";
import "./App.css";
import SearchForm from "./search-form";

function App() {
  const [todoList_, setTodoList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getAllTasks").then((response) => {
      setTodoList(response.data);
    });
  }, []);

  const handleToggle_ = (id) => {
    var mappedList = todoList_.map((task) => {
      // if (Number(id) === task.id) { alert(task.complete); }
      Axios.put("http://localhost:3001/updateCompleteTask", {
        id: Number(id),
        complete: !task.complete,
      }).then(() => {
        console.log("Completed Task updated successfuly");
        // props.addTask(userInput);
        // window.location.reload(false);
      });
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodoList(mappedList);
  };
  const clearCompleted_ = () => {
    // var notCompletedTaskList =
    todoList_.filter((task) => {
      Axios.delete("http://localhost:3001/deleteCompletedTask").then(() => {
        console.log("Completed Tasks deleted successfuly");
        // props.addTask(userInput);
        window.location.reload(false);
      });
    });
    // setTodoList(notCompletedTaskList);
  };
  // const addTask_ = (userInput) => {
  //   var copy = [...todoList_];
  //   // copy = [...copy, { id: todoList_.length + 1, task: userInput, complete: false }]
  //   setTodoList(copy);
  // }
  return (
    <div className="App">
      <TodoList
        todoList={todoList_}
        handleToggle={handleToggle_}
        clearCompletedTask={clearCompleted_}
      />
      <TodoForm />
      <SearchForm todoList={todoList_} />
    </div>
  );
}

export default App;

//mysql
//mysql workbench
