import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { booksList } from '../models/book-list.model';

export const ADD_BOOK = '[BOOK] Add';
export const REMOVE_BOOK = '[BOOK] Remove';
export const REMOVE_ALL_BOOK = '[BOOK] Remove All';

export class AddBook implements Action {
    readonly type = ADD_BOOK;
    constructor(public payload: booksList) {}
}

export class RemoveBook implements Action {
    readonly type = REMOVE_BOOK;
    constructor(public payload: number) {}
}
export class RemoveAllBook implements Action {
    readonly type = REMOVE_ALL_BOOK;
    constructor (){}
}

export type Actions = AddBook | RemoveBook | RemoveAllBook;