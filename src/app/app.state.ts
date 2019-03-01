import { booksList } from './models/book-list.model';

export interface AppState {
  readonly books: booksList[];
}