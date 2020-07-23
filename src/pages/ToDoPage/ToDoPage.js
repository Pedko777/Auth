import React, { Component } from 'react';
import { getAlltoDo } from '../../services/Api';
import {Link} from "react-router-dom"

class ToDoPage extends Component {
  state = {
    listTodo: null,
  };

  componentDidMount() {
    getAlltoDo().then(listTodo => {
       this.setState({ listTodo });
    })
    .catch(error => console.log(error))
  }

  render() {
    const { listTodo } = this.state;
    console.log(this.props)
    const {match} = this.props
    return (
      listTodo && (
        <ul>
          {listTodo.map(({ id, title }) => (
            <li key={id}>
                <Link to={`${match.url}/${id}`}>
              <h3>{title}</h3>
                </Link>
            </li>
          ))}
        </ul>
      )
    );
  }
}

export default ToDoPage;
