import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    { id: 1, content: "리액트하자" },
    { id: 2, content: "리액트우와" },
    { id: 3, content: "주차마지막" },
  ]);

  const [content, setContent] = useState("");

  const todoAdd = () => {
    const newTodos = {
      id: todo.length + 1,
      content: content,
    };
    setTodo([...todo, newTodos]);
    console.log(newTodos);
  };

  return (
    <div className="App">
      <div className="Header">
        <h2>
          <input
            type="text"
            value={content}
            placeholder="이름을 입력해주세요"
            // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={todoAdd}> 추가하기 </button>
        </h2>
        <h1>MY Todo List</h1>
      </div>

      <div className="todoShow">
        {todo.map((todo) => {
          return (
            <div className="todoContent">
              <h2>{todo.content}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
