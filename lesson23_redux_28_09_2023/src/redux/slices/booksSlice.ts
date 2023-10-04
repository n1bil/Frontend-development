import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uid } from "uid";

const initialState = {
    books: [
        { isbn: '1', title: 'Harry Potter', author: 'J.Rouling', year: 2002 }
    ]
}

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<{title: string; author: string; year: number}>) => {
            state.books.push({isbn: uid(), ...action.payload});
        },
        deleteBook: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter(book => book.isbn !== action.payload);
        },
        editBookTitle: (state, action: PayloadAction<{isbn: string; title: string}>) => {
            const bookToUpdate = state.books.find((book) => book.isbn === action.payload.isbn);
            if (bookToUpdate) {
                bookToUpdate.title = action.payload.title;
            }
        },
    },
});

export const { addBook, editBookTitle, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;