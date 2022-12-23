import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = "Fill out the details"

  details = {
    firstname:'',
    lastname:'',
    email:'',
    mobile:'',
    gender:''
  }
  save(){
    console.log(this.details);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
