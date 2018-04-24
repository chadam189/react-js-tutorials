import React from "react"
import { observer } from "mobx-react";

@observer
export default class TodoList extends React.Component {
  filter (e) {
    this.props.store.filter = e.target.value;
  }

  createNew (e) {
    if (e.which === 13) {
        this.props.store.createTodo(e.target.value);
        e.target.value = "";
    }
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete;
  }

  render() {
    const { clearComplete, filter, filteredTodos, todos } = this.props.store;

    const todoLis = filteredTodos.map(todo => (
        <li key={todo.id}>
            <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete}/>{todo.value}
        </li>
    ));

    return <div>
      <h1>todos</h1>
        <input className="create" onKeyPress={this.createNew.bind(this)} />
        <input className="filter" value={filter} onChange={this.filter.bind(this)} />
      <ul style={{listStyleType: 'none'}}>{todoLis}</ul>
        <a href="#" onClick={this.props.store.clearComplete}>Clear Complete</a>
    </div>
  }
}
