import React, {Component} from "react";
import {observer} from "mobx-react";
import Child from './Children';
import Todo from './Todo'

// step2. 创建视图 以响应状态的变化
// @observer
class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "",
      count: 0
    };
  }

  render() {
    const {input, count} = this.state;

    return (
      <div>
      <h3>TodoList</h3>

      {/* <input
        type="text"
        value={input}
        onChange={e => this.setState({input: e.target.value})}
      />

      <button onClick={() => this.setState({count: count + 1})}>
        add click {count}
      </button> */}

      {this.props.todoStore.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          change={this.props.todoStore.change}
          count={{count}}
        />
      ))}
      <p>未完成任务： {this.props.todoStore.unfinishedCount}个</p>
      {/* <Child count={{count}} /> */}
    </div>
    )
  }
}

export default TodoList;
