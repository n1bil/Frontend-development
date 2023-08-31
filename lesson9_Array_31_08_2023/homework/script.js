let library = [];
let inputDate = prompt('Enter book data separate by ";"'); // example: 1;Gold Fish; A.S. Pushkin;1820

while (inputDate) {
    let someDate = inputDate.split(";");
    if (!findBook(library, someDate[0])) {
        let book = new Book(someDate[0], someDate[1], someDate[2], someDate[3]);
        library.push(book);
    }
    
    inputDate = prompt('Enter book data separate by ";"');
}

function printLibrary() {
    for (let i = 0; i < library.length; i++) {
        console.log(library[i]);
    }
}

printLibrary();

function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return library[i];
        }
    }
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${author}, Year: ${year}`;
    };
}

// const book1 = new Book(1, 'Kolobok', 'nation', '~1800');
// const book2 = new Book(2, 'War and Piece', 'L.N. Tolstoy', '1830');

// console.log(book1);
// console.log(book2);

// 1;World;David;1999
