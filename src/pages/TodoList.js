import React, {Component} from "react";
import {observer} from "mobx-react";
import Todo from './Todo'



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
        {/*  TodoList 组件不是响应式组件，因此  问完成任务 不会更新 */}
        <p>未完成任务： {this.props.todoStore.unfinishedCount}个</p>
      </div>
    );
  }
}

export default TodoList;
