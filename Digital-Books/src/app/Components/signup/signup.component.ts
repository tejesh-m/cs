import { Component, OnInit } from '@angular/core';
import Reader from 'src/app/Entity/Reader';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  reader: Reader = new Reader();

  signUp() {
    const observable = this.bookservice.saveReader(this.reader);
    observable.subscribe(
      (response:any) => {
        console.log(response);
      }, function(error) {
        console.log(error);
        alert("something went wrong, please try again")
      }
    )
  }

  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
  }

}
