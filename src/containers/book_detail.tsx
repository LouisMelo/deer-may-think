import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BookListState, Book } from './book_list';

interface Props {
  activeBook: Book;
}

class BookDetail extends Component<Props> {
  render() {
    return this.props.activeBook && (
      <div>
        {this.props.activeBook.title}
      </div>
    );
  }
}

const mapStateToProps = (state: BookListState) => {
  return {
    activeBook: state.activeBook,
  };
};

export default connect(mapStateToProps)(BookDetail);
