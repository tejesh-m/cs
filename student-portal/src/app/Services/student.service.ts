import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:5000/students/';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  saveStudent(student: {
    firstname: String;
    lastname: String;
    class: number;
    email: String;
    gender: String;

  }) {
    return this.http.post(BASE_URL, student)
  }

  getStudents() {
    return this.http.get(BASE_URL)
  }

  deleteStudent(student: any) {
    return this.http.delete(BASE_URL + student.id)
  }
  constructor(public http: HttpClient) { }
}
