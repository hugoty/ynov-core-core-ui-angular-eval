import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CourseDto, CoursesService } from 'planner-core-core-client-angular';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  title: string;
  description: string;
  capacity: number;

  constructor(private dialogRef: MatDialogRef<CourseAddComponent>, private coursesService: CoursesService) {
    this.title = "";
    this.description = "";
    this.capacity = 0;
  }

  ngOnInit() {}

  save() {
    console.log(this.title, this.description);

    let course: CourseDto = {
      id: -1,
      title: this.title,
      description: this.description
    }

    console.log(course);

    this.coursesService.addCourse({body: course}).subscribe(
      (createdCourse: CourseDto) => this.dialogRef.close(createdCourse)
    )
  }

  close() {
    this.dialogRef.close();
  }
}
