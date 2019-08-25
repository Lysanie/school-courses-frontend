

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { CourseFormComponent } from './course/course-form/course-form.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'course', component: CourseComponent},
  {path: 'student', component: StudentComponent},
  {path: 'courseForm/:id', component: CourseFormComponent},
  {path: 'studentForm/:id', component: StudentFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
