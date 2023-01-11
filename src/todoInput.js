import { useState } from "react";

export function TodoInput({ onSave }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  function textchange(e) {
    setText(e.target.value);
  }
  function handleSave() {
    if (text === "") {
      setError("utgaa bichne uu");
    } else {
      onSave(text);
      setError("");
      setText("");
    }
  }
  function handleKeyUp(e) {
    if (e.code === "Enter") {
      handleSave();
    }
  }
  return (
    <>
      <input
        value={text}
        style={{ borderColor: error ? "red" : "black" }}
        onChange={textchange}
        onKeyUp={handleKeyUp}
      />
      <button onClick={handleSave}>nemeh</button>
    </>
  );
}
