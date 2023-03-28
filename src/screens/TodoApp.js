import React, { useState, useEffect } from "react";
import axios from "axios";

import AddTodo from "../components/AddTodo";
import FilterTodo from "../components/FilterTodo";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [flag,setFlag]=useState('')
  useEffect(() => {
    axios
      .get("https://backend-todo-2.onrender.com/api/todo")
      .then((response) => {
        setTodos(response.data);
      });
  }, [flag]);

  return (
    <div className="container mx-auto p-[25px] w-[60%] bg-base-200 rounded-[25px] h-auto mt-[10px]">
      <AddTodo setTodos={setTodos} todos={todos} setFlag={setFlag} />
      <FilterTodo setTodos={setTodos} todos={todos} setFlag={setFlag} />
    </div>
  );
}

export default TodoApp;
