import { Student } from './student.model';

export class Course {
  id: string;
  name: string;
  date: Date;
  studentList: Student[];
}
