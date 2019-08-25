import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './models/course.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourse(id: string) {
    return this.http.get('http://localhost:8080/course', {
      params: {name: id}
    }) as Observable<Course>;
  }

  getCourses() {
    return this.http.get('http://localhost:8080/courses');
  }

  postCourse(course: Course) {
    return this.http
      .put('http://localhost:8080/course/', course);
  }

  deleteCourse(name: string) {
    return this.http
      .delete(`http://localhost:8080/course/${name}`);
  }
}
