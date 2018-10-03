import React from 'react';
import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';

import './app.scss';

interface AppProps {
  message: string;
}

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <BookList />
          </div>
          <div className="column is-8">
            <BookDetail />
          </div>
        </div>
      </div>
    );
  }
}
