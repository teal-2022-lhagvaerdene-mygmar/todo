export function NewTodos({
  todos,
  handleEditingText,
  cancelEditing,
  updateEditing,
  handleDoneChange,
  editTodoInline,
  deleteLi,
  editingText,
}) {
  return (
    <ul>
      {todos.map((todo1, index) => (
        <li
          key={todo1.id}
          style={{ textDecoration: todo1.done ? "line-through" : "none" }}>
          {editingText[todo1.id] !== undefined ? (
            <NormalItem
              editingText={editingText}
              todo1={todo1}
              handleEditingText={handleEditingText}
              cancelEditing={cancelEditing}
              updateEditing={updateEditing}
              index={index}
            />
          ) : (
            <EditimgItem
              todo1={todo1}
              handleDoneChange={handleDoneChange}
              editTodoInline={editTodoInline}
              deleteLi={deleteLi}
              index={index}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
function NormalItem({
  editingText,
  todo1,
  handleEditingText,
  cancelEditing,
  updateEditing,
  index,
}) {
  return (
    <>
      <input
        value={editingText[todo1.id]}
        onChange={(e) => handleEditingText(todo1.id, e)}
      />
      <button onClick={() => cancelEditing(todo1.id)}>bolih</button>
      <button onClick={() => updateEditing(todo1.id, index)}>save</button>
    </>
  );
}
function EditimgItem({
  todo1,
  handleDoneChange,
  editTodoInline,
  deleteLi,
  index,
}) {
  return (
    <>
      <input type="checkbox" onChange={(e) => handleDoneChange(todo1.id, e)} />
      {todo1.text}
      {!todo1.done && (
        <>
          <button onClick={() => editTodoInline(todo1.id, index)}>edit</button>
        </>
      )}
      <button onClick={() => deleteLi(index)}>delete</button>
    </>
  );
}
