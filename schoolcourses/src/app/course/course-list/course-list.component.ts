import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course-service.service';
import { Course } from '../../shared/models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit {
  constructor(private dataCourse: CourseService, private router: Router) {}
  courses: Course[];

  ngOnInit() {
    this.dataCourse.getCourses().subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

  selectCourse(course: Course) {
    console.log(course);
    this.router.navigateByUrl(`/courseForm/${course.name}`);
  }
}
