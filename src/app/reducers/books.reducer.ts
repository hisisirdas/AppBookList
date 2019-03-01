import { Action } from '@ngrx/store';
import { booksList } from '../models/book-list.model';
import * as Actions from '../actions/book-list.actions';

//Initial State

const initialState: booksList[] =[
    {
     bookName: "Book Name",
    bookAuthor: "Book Author",
    bookUrl: "Book URL",
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }
},
{
     bookName: "Book Name",
    bookAuthor: "Book Author",
    bookUrl: "Book URL",
       personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }

},
{
     bookName: "Book Name",
    bookAuthor: "Book Author",
    bookUrl: "Book URL",
       personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }

}
]

// Section 2
export function reducer(state: booksList[] = initialState, action: Actions.Actions) {

    // Section 3
    switch(action.type) {
        case Actions.ADD_BOOK:
            return [...state, action.payload];
        
        case Actions.REMOVE_BOOK:
        state.splice(action.payload, 1);
        return state

         case Actions.REMOVE_ALL_BOOK:
        //  if (state.length === 0) {
        //      alert("No Data To Delete")
        //  }
        //  else {
             state = [];
             console.log(state);
        // }
        
        return state

        default:
            return state;
    }
}