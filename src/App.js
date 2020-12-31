import React, {useState} from "react";
// import TimerView from "./pages/TimerView";
// import appState from "./store/appState";
import TodoList from "./pages/TodoList";
import todoStore from "./store/todoStore";
// import UseLocalStore from "./pages/UseLocalStore";

export default function App(props) {
  const [countInit, setCountInit] = useState(-1);
  return (
    <div>
      <TodoList todoStore={todoStore} />
    </div>
  );
}
