import React, {Component, Children, useReducer} from "react";

// import {observer as observerLite, Observer, useObserver} from "mobx-react-lite";
// import {observer} from "mobx-react";
import {observer} from "../m-mobx-react/index";

@observer
class TodoList extends Component {
  inputRef = React.createRef();
  render() {
    return (
      <div>
        <h3>TodoList</h3>
        <input type="text" ref={this.inputRef} />
        {this.props.todoStore.todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            change={this.props.todoStore.change}
            ref={this.inputRef}
          />
        ))}
        <p>未完成任务： {this.props.todoStore.unfinishedCount}个</p>
      </div>
    );
  }
}

export default TodoList;


// 自己配置forwardRef
const Todo = observer(
  React.forwardRef((props, ref) => {
    const {todo, change} = props;
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
  })
);
