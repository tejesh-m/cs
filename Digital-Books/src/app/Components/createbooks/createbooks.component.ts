import { Component, OnInit } from '@angular/core';
import Book from 'src/app/Entity/Book';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-createbooks',
  templateUrl: './createbooks.component.html',
  styleUrls: ['./createbooks.component.css']
})
export class CreatebooksComponent implements OnInit {

  book: Book = new Book();

  save() {
    const observable = this.bookService.saveBook(this.book);
    observable.subscribe(
      (response:any) => {
        console.log(response);
      }, function(error) {
        console.log(error);
        alert("something went wrong, please try again")
      }
    )
  }

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

}
