 export class Book {
     constructor(title, autor, year) {
         this.title = title;
         this.autor = autor;
        this.year = year;
    }
    get title() { 
       return this._title;
    }
    get autor() {
        return this._autor;
    }
    get year() {
        return this._year;
    }
    set title(value) {
        if (typeof value === 'string' && value.trim().length > 0) {
            this._title = value 
        } else {
            console.error('Помилка: поле має бути заповнене'); 
        }
    }
        set autor(value) {
            if (typeof value === 'string' && value.trim().length > 0) {
                return this._autor = value
            } else {
                console.error('Помилка: поле має бути заповнене'); 
            }
        }
        set year(value) {
  const currentYear = new Date().getFullYear();
  if (typeof value === 'number' && value > 0 && value <= currentYear) {
    this._year = value;
  } else {
    console.error('Помилка: Рік має бути числом!');
  }
}
    
    printInfo() {
        console.log(`Книга: '${this.title}', Автор: '${this.autor}', Рік видання: '${this.year}`)
     }
     static getOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) return null;

    let oldest = books[0];
    for (const book of books) {
      if (book.year < oldest.year) {
        oldest = book;
      }
    }
    return oldest;
  }
 }

export default Book;
