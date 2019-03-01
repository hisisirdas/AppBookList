import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { booksList } from '../models/book-list.model';
import { AppState } from './../app.state';
import * as Actions from '../actions/book-list.actions';

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {

  public book:booksList;

  constructor(private store: Store<AppState> ) {
    this.book = {
      bookAuthor : "",
      bookName: "",
      bookUrl: "",
      personalInfo:{
        name: "",
        address: {
          city: "",
          line1: "",
          line2: "",
          state: ""
        }
      }
    };
   }

  addNewBooks() {
    this.store.dispatch(
      new Actions.AddBook({
      bookName : this.book.bookName,
      bookAuthor: this.book.bookAuthor,
      bookUrl : this.book.bookUrl, 
      personalInfo: this.book.personalInfo,
    }));
    console.log(this.store.select.length)
  }

  ngOnInit() {
  }

  delAllBooks() {
   this.store.select(booksList => booksList)
      this.store.dispatch(
        new Actions.RemoveAllBook()
        )
    }
}
