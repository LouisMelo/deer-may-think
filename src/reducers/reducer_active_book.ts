import { Book } from '../containers/book_list';

export default function(state: Book = null, action: any) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
