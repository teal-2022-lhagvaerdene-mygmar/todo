import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

// const todo = ["hi", "za"];
function App() {
  const [text, setText] = useState("");
  const [todos, setTodo] = useState([]);
  const [error, setError] = useState("");
  const [editingText, setEditingText] = useState({});
  function textchange(e) {
    setText(e.target.value);
  }
  function addTodo() {
    if (text === "") {
      setError("utgaa bicne uu");
    } else {
      const newTodos = {
        text: text,
        done: false,
        id: uuidv4(),
      };
      const newTodo = [newTodos, ...todos];
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
  function handleDoneChange(id, e) {
    const newTodo = [...todos];
    let index;
    for (let i = 0; i < todos.length; i++) {
      if (id === todos[i].id) {
        index = i;
        break;
      }
    }
    newTodo[index].done = !newTodo[index].done;
    setTodo(newTodo);
  }
  function editTodoPrompt(id) {
    const newtodos = [...todos];
    const index = newtodos.findIndex((todo) => todo.id === id);
    const editedtext = prompt("todo zasah", todos[index].text);
    newtodos[index].text = editedtext;
    setTodo(newtodos);
  }
  function editTodoInline(id, index) {
    const newEditingText = { ...editingText };
    newEditingText[id] = todos[index].text;
    setEditingText(newEditingText);
  }
  function handleEditingText(id, e) {
    const newEditingText = { ...editingText };
    newEditingText[id] = e.target.value;
    setEditingText(newEditingText);
  }
  function cancelEditing(id) {
    const newEditingText = { ...editingText };
    newEditingText[id] = undefined;
    setEditingText(newEditingText);
  }
  function updateEditing(id, index) {
    const newTodo = [...todos];
    newTodo[index].text = editingText[id];
    setTodo(newTodo);
    cancelEditing(id);
  }
  function handleKeyUp(e) {
    if (e.code === "Enter") {
      addTodo();
    }
  }
  return (
    <div>
      <input value={text} onChange={textchange} onKeyUp={handleKeyUp} />
      <button onClick={addTodo}>nemeh</button>
      {error && <div style={{ color: "red" }}> aldaa : {error}</div>}
      <ul>
        {todos.map((todo1, index) => (
          <li
            key={todo1.id}
            style={{ textDecoration: todo1.done ? "line-through" : "none" }}>
            {editingText[todo1.id] !== undefined ? (
              <>
                <input
                  value={editingText[todo1.id]}
                  onChange={(e) => handleEditingText(todo1.id, e)}
                />
                <button onClick={() => cancelEditing(todo1.id)}>bolih</button>
                <button onClick={() => updateEditing(todo1.id, index)}>
                  save
                </button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  onChange={(e) => handleDoneChange(todo1.id, e)}
                />
                {todo1.text}
                {!todo1.done && (
                  <>
                    <button onClick={() => editTodoInline(todo1.id, index)}>
                      edit
                    </button>
                  </>
                  //zasah arga-1
                  // <button onClick={() => editTodoPrompt(todo1.id)}>edit</button>
                )}
                <button onClick={() => deleteLi(index)}>delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
