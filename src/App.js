import React from "react";
import TodoList from "./pages/TodoList";
import todoStore from './store/todoStore';

export default function App(props) {
  return (
    <div>
      <TodoList todoStore={todoStore} />
    </div>
  );
}
