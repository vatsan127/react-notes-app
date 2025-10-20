import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState([]);

  function saveToDo() {
    const currentToDo = { title: title, description: description };
    setTodoList([...todoList, currentToDo]);

    // Clear inputs after saving
    setTitle("");
    setDescription("");
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>{title.trim() || "Notes App"}</h1>
        </div>

        <div className="card-input">
          <label htmlFor="title-input">
            <p>Title</p>
          </label>
          <input
            id="title-input"
            type="text"
            placeholder="Type here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="card-input">
          <label htmlFor="description-input">
            <p>Description</p>
          </label>
          <input
            id="description-input"
            type="text"
            placeholder="Type here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button className="card-save-btn" onClick={saveToDo}>
          Save
        </button>

        {todoList.length > 0 && (
          <div className="todo-list">
            {todoList.map((todo, index) => (
              <div key={index} className="todo-item">
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
