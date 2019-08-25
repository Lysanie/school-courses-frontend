import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StudentService } from 'src/app/student/student.service';
import { Student } from '../../shared/models/student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.sass']
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;
  student$: Observable<Student>;
  canDelete = false;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.studentForm = this.formBuilder.group({
      id: [null],
      studentCode: [-1],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['']
    });
  }

  ngOnInit() {
    this.student$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.studentService.getStudent(+params.get('id'))
      )
    );
    this.student$.subscribe((res: Student) => {
      this.canDelete = res.studentCode > 0;
      this.studentForm.setValue({
        id: res.id,
        studentCode: res.studentCode,
        firstName: res.firstName,
        lastName: res.lastName,
        email: res.email,
        phone: res.phone
      });
    });
  }

  onSubmit() {
    const student = this.studentForm.value;
    this.studentService.postStudent(student).subscribe(status => {
      this.router.navigateByUrl('/student');
    });
  }

  delete() {
    this.studentService.deleteStudent(this.studentForm.value.studentCode)
        .subscribe(status => {
          this.router.navigateByUrl('/student');
        });
  }

  get firstName() { return this.studentForm.get('firstName'); }
  get lastName() { return this.studentForm.get('lastName'); }
  get email() { return this.studentForm.get('email'); }

}
