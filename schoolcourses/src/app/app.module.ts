import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListboxModule } from 'primeng/listbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseFormComponent } from './course/course-form/course-form.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CourseComponent,
    StudentComponent,
    CourseFormComponent,
    CourseListComponent,
    StudentListComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ListboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
