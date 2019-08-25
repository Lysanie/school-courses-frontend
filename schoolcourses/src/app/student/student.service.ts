import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../shared/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getStudent(id: number) {
    return this.http.get(`http://localhost:8080/student/${id}`) as Observable<
      Student
    >;
  }

  getStudents() {
    return this.http.get('http://localhost:8080/students') as Observable<
      Student[]
    >;
  }

  postStudent(student: Student) {
    return this.http.put('http://localhost:8080/student', student);
  }

  deleteStudent(id: number) {
    return this.http.delete(`http://localhost:8080/student/${id}`);
  }
}
