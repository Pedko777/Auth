import React, { Component } from 'react';
import { getOnetoDo } from '../../services/Api';
import ToDoInfo from "../../components/ToDoInfo/ToDoInfo"
import {Route, Link} from "react-router-dom"

class ToDoOnePage extends Component {
  state = {
    id: null,
    title: '',
    text: '',
  };

  componentDidMount() {
    // console.log(this.props.match.params.idTodo)
    const idTodo = this.props.match.params.idTodo;
    getOnetoDo(idTodo)
      .then(todo => {
        const { title, text } = todo;
        this.setState({ title: title, text: text });
      })
      .catch(error => console.log(error));
  }

  handleGoBack = () => {
    const prevLocation = this.props.location.state?.from;
    //  const prevLocation = this.props.location.state && this.props.location.state.from;
    if (prevLocation) {
      this.props.history.push(prevLocation);
      return;
    }
    this.props.history.push("/")
  };

  render() {
    // console.log(this.props.location);
    const { id, title, text } = this.state;
    const {match, location} = this.props
    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <h2>Todo One Page</h2>
        <h3>{title}</h3>
        <p>{text}</p>
        <Link to={{
         pathname: `${match.url}/info`,
         state: {from: location.state.from}
          }}>Show info</Link>
        <Route path={`${match.url}/info`} component={ToDoInfo}/>
      </div>
    );
  }
}

export default ToDoOnePage;
