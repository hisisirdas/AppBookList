// Other imports removed for brevity
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/books.reducer';
import { ViewBooksComponent } from './view-books/view-books.component';
import { AppComponent } from './app.component';
import { CreateBooksComponent } from './create-books/create-books.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { AppService } from './app-services/app.service';


@NgModule({
  declarations : [
    AppComponent,
  ViewBooksComponent,
  CreateBooksComponent,
  CreateBooksComponent,
  AppHeaderComponent,
  BooksDetailsComponent
  ],
  imports : [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      booksList : reducer
    }),
    RouterModule.forRoot([
      { path: 'booksDetail', component: BooksDetailsComponent },
      { path: 'viewBooks', component: ViewBooksComponent },
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
  
})
export class AppModule {
  
}

  // Other code removed for brevity