/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Book" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, author, pageCount
Metodas: 
isLong() - jeigu knygos puslapių skaičius bus daugiau nei 500, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */
class Book {
    constructor(title, author, pageCount) {
      this.title = title;
      this.author = author;
      this.pageCount = pageCount;
    }
  
    isLong() {
      return this.pageCount > 500;
    }
  } const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 600);

console.log(book.title); // Output: "The Great Gatsby"
console.log(book.author); // Output: "F. Scott Fitzgerald"
console.log(book.pageCount); // Output: 200
console.log(book.isLong()); // Output: false