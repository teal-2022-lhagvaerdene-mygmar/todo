import { useState } from "react";

export function NewTodos({ todo1, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [done, setDone] = useState(false);
  function handleDoneToggle() {
    setDone(!done);
  }
  function handleSave(text) {
    onUpdate(text);
    setEditing();
  }
  if (editing) {
    return (
      <EditimgItem
        defaultValue={todo1.text}
        onCancel={() => setEditing(false)}
        onSave={handleSave}
      />
    );
  }
  return (
    <NormalItem
      onToggleDone={handleDoneToggle}
      done={done}
      todo1={todo1}
      onEdit={() => setEditing(true)}
      onDelete={onDelete}
    />
  );
}
function EditimgItem({ onSave, onCancel, defaultValue }) {
  const [text, setText] = useState(defaultValue);
  return (
    <li>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => onCancel()}>bolih</button>
      <button onClick={() => onSave(text)}>save</button>
    </li>
  );
}
function NormalItem({ done, onToggleDone, todo1, onEdit, onDelete }) {
  return (
    <li>
      <input type="checkbox" onChange={onToggleDone} checked={done} />
      {todo1.text}
      {!todo1.done && (
        <>
          <button onClick={onEdit}>edit</button>
        </>
      )}
      <button onClick={onDelete}>delete</button>
    </li>
  );
}
