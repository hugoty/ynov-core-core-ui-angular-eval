import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CourseAddComponent } from '../course-add/course-add.component';
import { CourseDto, CoursesService } from 'planner-core-core-client-angular';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses?: CourseDto[];

  constructor(public dialog: MatDialog, private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.listCourses();
  }

  listCourses(): void {
    this.coursesService.listCourses()
      .subscribe({
        next: (data) => {
          this.courses = data;
        },
        error: (e) => console.error(e)
      });
  }

  removeCourse(courseId?: number): void {
    if(courseId) {
      this.coursesService.deleteCourse({id: courseId}).subscribe(this.listCourses);
    } else {
      console.error("Pas d'identifiant de cours à supprimer");
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(CourseAddComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.courses?.push(result);
    });
  }
}
