import React, {Component} from "react";
import {observer} from "mobx-react";
import Todo from './Todo'
import { Observer } from '../m-mobx-react-lite'



class TodoList extends Component {

  inputRef = React.createRef();

  render() {

    return (
      <div>
        <h3>TodoList</h3>
        {/* <input type="text" ref={this.inputRef} /> */}
        {this.props.todoStore.todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            change={this.props.todoStore.change}
            ref={this.inputRef}
          />
        ))}
        {/*  TodoList 组件不是响应式组件，因此可以使用 Observer 将组件 p 变成响应式组件 */}
        <Observer>{() => (<p>未完成任务： {this.props.todoStore.unfinishedCount}个</p>)}</Observer>
      </div>
    );
  }
}

export default TodoList;
