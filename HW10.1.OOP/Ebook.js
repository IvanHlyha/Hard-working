import { Book } from './Book.js';

export class Ebook extends Book {
    constructor (title, autor, year, fileFormat) {
        super (title, autor, year)
        this.fileFormat = fileFormat; 
    }
    get fileFormat() {
        return this._fileFormat
    }
    set fileFormat(value) {
        if (typeof value === 'string' && value.trim().length > 0) {
            this._fileFormat = value; 
        }
        else {
            console.error('Помилка: Формат файлу має бути рядком!');
        }
    }
printInfo() {
    console.log (`Книга: '${this.title}', Автор: '${this.autor}', Рік: '${this.year}', Формат файлу: '${this.fileFormat}`);
}
static fromBook(bookInstance, fileFormat) {
    return new Ebook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
  }
}

export default Ebook;