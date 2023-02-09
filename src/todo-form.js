import React, { useState } from "react";
import Axios from "axios";

function TodoForm(props) {
  const [userInput, setUserInput] = useState("");
  const handleChange = (event) => {
    setUserInput(event.currentTarget.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("https://task-management-busy-qa.herokuapp.com/addTask", {
      taskName: userInput,
      complete: false,
    }).then(() => {
      console.log("Task added successfuly");
      // props.addTask(userInput);
      window.location.reload(false);
    });
    setUserInput("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder="Enter a Todo Task"
        />
        <button onClick={handleSubmit}>Add Task</button>
      </form>
    </div>
  );
}

export default TodoForm;
