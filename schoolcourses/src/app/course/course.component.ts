import { CourseService } from './../shared/course-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor() { }

  listCourse: string= 'app-course-list';


  ngOnInit() {

  }

}
