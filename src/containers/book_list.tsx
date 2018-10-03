import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators, Dispatch } from 'redux';

export type Book = {
  title: string;
};

export interface BookListState {
  books: Book[];
  activeBook: Book;
}

interface StateProps {
  books: Book[];
}

interface DispatchProps {
  selectBook(book: Book): void;
}

interface OwnProps {}

interface Props extends StateProps, DispatchProps, OwnProps {}

class BookList extends Component<Props> {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}>
          <a onClick={() => this.props.selectBook(book)}>
            {book.title}
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <aside className="menu">
        <p className="menu-label">
          books
        </p>
        <ul className="menu-list">
          {this.renderList()}
        </ul>
      </aside>
    );
  }
}

const mapStateToProps = (state: Props) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
