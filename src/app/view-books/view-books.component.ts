import { AppService } from '../app-services/app.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { booksList } from '../models/book-list.model';
import { AppState } from './../app.state';
import * as Actions from '../actions/book-list.actions';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  viewBooks: Observable<any>;

  constructor(private store: Store<AppState>, private appService: AppService) { 
    //this.viewBooks = store.select('booksList');
    this.viewBooks = this.appService.getAll();
  }

  ngOnInit() {
  }

  delBooks(index) {
  this.store.dispatch(new Actions.RemoveBook(index));
}



}
