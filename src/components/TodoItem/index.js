import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  onClickDeleteBtn = () => {
    const {todoList, deleteTodoList} = this.props
    const {id} = todoList
    deleteTodoList(id)
  }

  render() {
    const {todoList} = this.props
    const {title} = todoList
    return (
      <li className="list-container">
        <p className="list-heading">{title}</p>
        <button
          className="delete-btn"
          type="button"
          onClick={this.onClickDeleteBtn}
        >
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
