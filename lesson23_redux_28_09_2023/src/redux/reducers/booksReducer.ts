import { ActionBook } from "../types/Action";
import { BooksState } from "../types/state";
import { uid } from 'uid';

const initialState: BooksState = {
    books: [
        { isbn: '1', title: 'Harry Potter', author: 'J.Rouling', year: 2002 }
    ]
}

export default function booksReducer(state: BooksState = initialState, action: ActionBook): BooksState {
    switch (action.type) {
        case 'book/add':
            return {...state, books: [...state.books, {isbn: uid(), ...action.payload }]};
        case 'book/delete':
            return {...state, books: state.books.filter(book => book.isbn !== action.payload)};
        case 'book/editTitle':
            return {...state, books: state.books.map(book => {
                if (book.isbn === action.payload.isbn) {
                    return {...book, title: action.payload.title}
                }
                return book;
            })}    
        default:
            return state;
    }
}