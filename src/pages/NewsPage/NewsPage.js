import React, { Component } from 'react';

import { getNews, controller } from '../../services/Api';

class NewsPage extends Component {
  state = {
    listNews: [],
  };

  componentDidMount() {
    getNews()
      .then(data => {
        // console.log(data.articles)
        this.setState({ listNews: data.articles });
      })
      .catch(error => console.log(error));
  }

  componentWillMount() {
    controller.abort()
  }

  render() {
    const { listNews } = this.state;
    return (
      <>
        <h1>NewsPage</h1>
        <ul>
          {listNews.map(item => {
            //   console.log(item)
            return (
              <li key={item.publishedAt}>
                <h3>{item.title}</h3>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
export default NewsPage;
