import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from "../components/courses/courses.component";
import {StudentsComponent} from "../components/students/students.component";
import {UsersComponent} from "../components/users/users.component"; // CLI imports router

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'students', component: StudentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
