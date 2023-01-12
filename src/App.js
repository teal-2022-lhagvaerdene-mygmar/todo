import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { NewTodos } from "./newTodos";
import { TodoInput } from "./todoInput";
// import { ErrorInput } from "./errorInput";
function App() {
  const [todos, setTodo] = useState([]);

  function handleSave(text) {
    const newTodos = {
      text: text,
      done: false,
      id: uuidv4(),
    };
    const newTodo = [newTodos, ...todos];
    setTodo(newTodo);
  }
  function deleteLi(bairlal) {
    if (window.confirm("ustgah uu")) {
      const newTodo = [...todos];
      newTodo.splice(bairlal, 1);
      setTodo(newTodo);
    }
  }
  function updateEditing(index, text) {
    const newTodo = [...todos];
    newTodo[index].text = text;
    setTodo(newTodo);
  }

  return (
    <div>
      <TodoInput onSave={handleSave} />
      <ul>
        {todos.map((todo1, index) => {
          return (
            <NewTodos
              key={todo1.id}
              todo1={todo1}
              onUpdate={(text) => updateEditing(index, text)}
              onDelete={() => deleteLi(index)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
