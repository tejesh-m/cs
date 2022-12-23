import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Book from '../Entity/Book';

const BASE_URL = "http://localhost:8080/api/v1/digitalbooks/";
const BASE_URL2 ="http://localhost:8081/api/v1/digitalbooks/reader/signup"

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private BASE_URL1 = "http://localhost:8080/api/v1/digitalbooks/search";

  saveBook(book: {
    
    title:String,
    category:String,
    price:number,
    authorName:String,
    publisher:String,
    publishedDate:number,
    chapters:number,
    active:boolean

  }){
    return this.http.post(BASE_URL+"add"+"/"+"book", book)
  }
  
  saveReader(reader: {
    email:String,
    username:String
    password:String
    
  }){
    return this.http.post(BASE_URL2, reader)
  }

  getBooks() {
    return this.http.get(BASE_URL + "books")
  }

 getBookBySearch(title: String, authorName: String, publisher: String, price: number):Observable<Book[]> {
    console.log(`${this.BASE_URL1}/?title=${title}&authorName=${authorName}&publisher=${publisher}&price=${price}`);
    return this.http.get<Book[]>(`${this.BASE_URL1}/?title=${title}&authorName=${authorName}&publisher=${publisher}&price=${price}`)
    
  }


  constructor(public http: HttpClient) { }
}
