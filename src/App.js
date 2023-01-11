import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { NewTodos } from "./newTodos";
import { TodoInput } from "./todoInput";
// import { ErrorInput } from "./errorInput";
function App() {
  const [todos, setTodo] = useState([]);
  const [editingText, setEditingText] = useState({});

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

  return (
    <div>
      <TodoInput onSave={handleSave} />

      <NewTodos
        todos={todos}
        handleEditingText={handleEditingText}
        cancelEditing={cancelEditing}
        updateEditing={updateEditing}
        handleDoneChange={handleDoneChange}
        editTodoInline={editTodoInline}
        deleteLi={deleteLi}
        editingText={editingText}
      />
    </div>
  );
}

export default App;
