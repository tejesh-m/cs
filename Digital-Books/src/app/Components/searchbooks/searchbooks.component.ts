import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Book from 'src/app/Entity/Book';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-searchbooks',
  templateUrl: './searchbooks.component.html',
  styleUrls: ['./searchbooks.component.css']
})
export class SearchbooksComponent implements OnInit {

  title: String;
  authorName: String;
  publisher: String;
  price:number

  book: Book = new Book();
  books:Book[] = [];

  constructor(private bookService:BookService, private router: Router) { }

 searchBook() {
    this.bookService.getBookBySearch(this.book.title,this.book.authorName,this.book.publisher,this.book.price).subscribe(
      data => {
        this.books= data;
        console.log(data)
      },
    error => console.log(error))
      

  }

  ngOnInit(): void {
  }

}
