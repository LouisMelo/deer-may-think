import { Book } from '../containers/book_list';

// selectBook is an ActionCreator, it needs to return an action
// an object with type property
export function selectBook(book: Book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
