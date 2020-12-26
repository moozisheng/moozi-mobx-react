import React from "react";
import {observer, Observer, useObserver} from "mobx-react";

// 如何给组件添加响应式
// // 方法1： observer hoc（高阶组件：接收组件为参数并且返回一个新组件的函数）
// const Todo = observer(({todo, change}) => {
//   console.log("todo props"); //sy-log
//   return (
//     <div>
//       <input
//         id={todo.title}
//         type="checkbox"
//         checked={todo.finished}
//         onChange={() => change(todo)}
//       />
//       <label for={todo.title}>{todo.title}</label>
//     </div>
//   );
// });

// 方法2： Observer component
// const Todo = ({todo, change}) => {
//   return (
//     <Observer>
//       {() => (
//         <div>
//           <input
//             id={todo.title}
//             type="checkbox"
//             checked={todo.finished}
//             onChange={() => change(todo)}
//           />
//           <label for={todo.title}>{todo.title}</label>
//         </div>
//       )}
//     </Observer>
//   );
// };

// 方法3： useObserver hook
const Todo = ({todo, change}) => {
    return useObserver(() => (
      <div>
        <input
            id={todo.title}
            type="checkbox"
            checked={todo.finished}
            onChange={() => change(todo)}
          />
          <label for={todo.title}>{todo.title}</label>
      </div>
    ));
};


export default Todo;
  