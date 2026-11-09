import  Book  from './Book.js';
import Ebook  from './Ebook.js';

console.log('1. Створення об\'єктів класу Book');
const book1 = new Book('1984', 'George Orwell', 1949);
const book2 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
book1.printInfo();
book2.printInfo();

console.log('2. Створення екземпляра EBook');
const ebook1 = new Ebook('Clean Code', 'Robert C. Martin', 2008, 'PDF');
ebook1.printInfo();

console.log('3. Перевірка гетерів та сеттерів з валідацією');

book1.year = 1950;
console.log(`Новий рік для book1: ${book1.year}`);

book1.year = 3000; 

console.log('4. Статичний метод пошуку найдавнішої книги');
const library = [book1, book2, ebook1];
const oldest = Book.getOldestBook(library);
console.log('Найдавніша книга у списку:');
oldest.printInfo();

console.log('5. Статичний метод EBook.fromBook');
const regularBook = new Book('Kobzar', 'Taras Shevchenko', 1840);
const convertedEBook = Ebook.fromBook(regularBook, 'EPUB');
convertedEBook.printInfo();