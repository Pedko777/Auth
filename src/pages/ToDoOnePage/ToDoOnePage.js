import React, { Component } from 'react'
import {getOnetoDo} from "../../services/Api"


class ToDoOnePage extends Component {
state = {
  title: "",
  text: "",
}

  componentDidMount() {
    // console.log(this.props.match.params.idTodo)
    const idTodo = this.props.match.params.idTodo
    getOnetoDo(idTodo)
    .then(todo=>this.setState({ title: todo.title, text: todo.text }))
    .catch(error=>console.log(error))
  }

  // const {}= this.props
  render () {
    const {title, text} = this.state
    return (
      <div>
        <h2>Todo One Page</h2>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    );
  }
};

export default ToDoOnePage;
