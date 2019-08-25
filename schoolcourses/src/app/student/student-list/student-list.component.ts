import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student/student.service';
import { Student } from '../../shared/models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService: StudentService) { }
  students: Student[];


  ngOnInit() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }
}
