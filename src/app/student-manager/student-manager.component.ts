import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

interface Student {
  name: string;
  gender: string;
  course: string;
  isTerm: boolean;
}

@Component({
  selector: 'app-student-manager',
  templateUrl: './student-manager.component.html',
  styleUrls: ['./student-manager.component.css'],
})
export class StudentManagerComponent implements OnInit {
  studentForm: FormGroup;
  displayedColumns: string[] = [
    'name',
    'email',
    'gender',
    'course',
    'isTerm',
    'actions',
  ];

  students = new MatTableDataSource<Student>([]);
  editIndex: number | null = null;
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.pattern(this.emailPattern)]],
      gender: [''],
      course: [''],
      isTerm: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.studentForm.valid) {
      if (this.editIndex === null) {
        this.students.data.push(this.studentForm.value);
      } else {
        this.students.data[this.editIndex] = this.studentForm.value;
        this.editIndex = null;
      }

      this.students._updateChangeSubscription();
      this.studentForm.reset();
    }
  }

  editStudent(student: Student) {
    this.editIndex = this.students.data.indexOf(student);
    this.studentForm.patchValue(student);
  }

  deleteStudent(student: Student) {
    const index = this.students.data.indexOf(student);
    if (index !== -1) {
      this.students.data.splice(index, 1);
      this.students._updateChangeSubscription();
    }
  }
}
