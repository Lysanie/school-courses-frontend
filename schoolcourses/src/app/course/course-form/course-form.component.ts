import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CourseService } from 'src/app/shared/course-service.service';
import { Course } from '../../shared/models/course.model';
import { Student } from '../../shared/models/student.model';
import { StudentService } from '../../student/student.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  course$: Observable<Course>;
  students$: Observable<Student[]>;
  courseForm: FormGroup;
  students: any[];
  course: Course;
  canDelete: boolean;
  studentsInfo: Student[];

  constructor(
    private formBuilder: FormBuilder,
    private dataCourse: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {
    this.courseForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      date: [new Date().toLocaleDateString(), Validators.required],
      studentList: ['']
    });
  }

  ngOnInit() {
    // Used for obtaining the list of students
    this.students$ = this.studentService.getStudents();
    this.course$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dataCourse.getCourse(params.get('id'))
      )
    );
    this.course$.subscribe(courseInfo => {
      this.course = courseInfo;
      this.students$.subscribe(studentsInfo => {
        studentsInfo.concat(this.course.studentList);
        this.studentsInfo = studentsInfo;
        this.students = studentsInfo.map(student => {
          return {
            code: student.id,
            name: `${student.firstName} ${student.lastName}`
          };
        });
      });
      this.updateForm(courseInfo);

      this.canDelete = courseInfo.id != null;
    });
  }

  updateForm(course: Course) {
    const dateFormated = formatDate(course.date, 'yyyy-MM-dd', 'en-US');
    this.courseForm.patchValue({
      id: course.id,
      name: course.name,
      date: dateFormated
    });
  }

  onSubmit() {
    const students = (this.courseForm.value.studentList || []).map(student => {
      return this.studentsInfo.find(sinfo => sinfo.id === student.code);
    });

    const course: Course = this.courseForm.value;
    course.studentList = students;

    this.dataCourse.postCourse(course)
    .subscribe(status => {
      this.router.navigateByUrl('/course');
    });
  }

  delete() {
    this.dataCourse.deleteCourse(this.courseForm.value.name)
    .subscribe(status => {
      this.router.navigateByUrl('/course');
    });
  }

  get name() { return this.courseForm.get('name'); }
  get lastName() { return this.courseForm.get('date'); }
}
