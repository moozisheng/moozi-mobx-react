import React from "react";
// import {observer, Observer, useObserver} from "mobx-react";

// 使用自定义的 useObserver 给组件添加响应
import {useObserver} from '../m-mobx-react-lite'


const Todo = ({todo, change}) => {
    return useObserver(() => (
      <div>
        <input
            id={todo.title}
            type="checkbox"
            checked={todo.finished}
            onChange={() => change(todo)}
          />
          <label htmlFor={todo.title}>{todo.title}</label>
      </div>
    ));
};


export default Todo;
  