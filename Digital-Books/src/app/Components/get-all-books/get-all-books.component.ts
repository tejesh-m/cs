import { Component, OnInit } from '@angular/core';
import Book from 'src/app/Entity/Book';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.css']
})
export class GetAllBooksComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) { }
  
  ngOnInit(): void {
    const promise = this.bookService.getBooks();
  promise.subscribe((response) => {
    console.log(response);
    this.books = response as Book[];
  })
  }

}
