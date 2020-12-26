import React from "react";
// import {observer, Observer, useObserver} from "mobx-react";

// 使用自定义的 observer 给组件添加响应
import { observer } from '../m-mobx-react-lite'

const Todo = observer(
  ({todo, change}, ref) => {
    console.log("input value", ref.current && ref.current.value); //sy-log
    return (
      <div>
        <input
            id={todo.title}
            type="checkbox"
            checked={todo.finished}
            onChange={() => change(todo)}
          />
          <label htmlFor={todo.title}>{todo.title}</label>
      </div>
    );
  },
  {forwardRef: true}
);


export default Todo;
  