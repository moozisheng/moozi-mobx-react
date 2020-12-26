import React from "react";
// import {observer, Observer, useObserver} from "mobx-react";

// 使用自定义的 Observer 给组件添加响应
import { Observer } from '../m-mobx-react-lite'

const Todo = ({todo, change}) => {
  return (
    // 以 children 的形式将组件传递给 Observer
    // <Observer>
    //   {() => (
    //     <div>
    //       <input
    //         id={todo.title}
    //         type="checkbox"
    //         checked={todo.finished}
    //         onChange={() => change(todo)}
    //       />
    //       <label htmlFor={todo.title}>{todo.title}</label>
    //     </div>
    //   )}
    // </Observer>

    // 以 props 的形式将组件传递给 Observer
    <Observer
      render={() => (
        <div>
          <input
            id={todo.title}
            type="checkbox"
            checked={todo.finished}
            onChange={() => change(todo)}
          />
          <label htmlFor={todo.title}>{todo.title}</label>
        </div>
      )}></Observer>
  );
};


export default Todo;
  