import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const BASE_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  saveBook(book: {
    bookName: String;
    bookAuthor: String;
    bookPrice: number;
    bookGenre: String;
    borrowedStatus: boolean;

  }) {
    return this.http.post(BASE_URL + "add/book", book)
  }
  getBooks() {
    return this.http.get(BASE_URL + "allbooks")
  }
  deleteBook(book : any){
    return this.http.delete(BASE_URL + "remove" + "/" + book.bookId)
  }
  constructor(public http: HttpClient) { }
}
