import { useState } from "react";
import "./App.css";
// const todo = ["hi", "za"];
function App() {
  const [text, setText] = useState("");
  const [todos, setTodo] = useState([]);
  const [error, setError] = useState("");
  function textchange(e) {
    setText(e.target.value);
  }
  function addTodo() {
    if (text === "") {
      setError("utgaa bicne uu");
    } else {
      const newTodo = [...todos, text];
      setTodo(newTodo);
      setText("");
      setError("");
    }
  }
  function deleteLi(bairlal) {
    if (window.confirm("ustgah uu")) {
      const newTodo = [...todos];
      newTodo.splice(bairlal, 1);
      setTodo(newTodo);
    }
  }
  return (
    <div>
      <input value={text} onChange={textchange} />
      <button onClick={addTodo}>nemeh</button>
      {error && <div style={{ color: "red" }}> aldaa : {error}</div>}
      <ul>
        {todos.map((todo1, index) => (
          <li key={index}>
            {todo1}
            <button onClick={() => deleteLi(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
