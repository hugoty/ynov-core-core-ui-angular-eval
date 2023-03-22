import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseAddComponent } from './course/component/course-add/course-add.component';
import { CourseListComponent } from './course/component/course-list/course-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'course', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent },
  //{ path: 'course/:id', component: TutorialDetailsComponent },
  { path: 'add-course', component: CourseAddComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
