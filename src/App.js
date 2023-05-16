import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const getTodos = async () => {
  
      const res = await axios.get("http://localhost:8080/todos/");
      let data = res.data;
      setTodos(data);
  
  };
  useEffect(() => {
    getTodos();
  }, []);
  const handleAdd = async () => {
    await axios.post("http://localhost:8080/todos/", {
      id: todos.length + 2,
      title: title,
    });
    setTodos((todos) => [...todos, { id: todos.length + 2, title: title }]);
  };
  const handleDel = async (id) => {
    await axios.delete(`http://localhost:8080/todos/${id}`);
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="App">
      <input
        type="text"
        name="title"
        value={title}
        className="input"
        onChange={handleChange}
      />
      <button
        disabled={title ? false : true}
        onClick={handleAdd}
        className="button"
        style={{ backgroundColor: title ? "blueviolet" : "gray" }}
      >
        ADD
      </button>
      {todos?.map((todo) => {
        return (
          <div key={todo.id} className="itemdiv">
            <li>
              {todo.title} with id{todo.id}
            </li>
            <button className="button" onClick={() => handleDel(todo.id)}>
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
