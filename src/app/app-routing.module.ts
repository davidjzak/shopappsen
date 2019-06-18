import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FirecoursesComponent } from './firecourses/firecourses.component';
import { StudentComponent } from './student/student.component';
import { TeacherdashComponent } from './teacherdash/teacherdash.component'

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
redirectTo: '/login'  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'fire',
    component: FirecoursesComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'teacherdash',
    component: TeacherdashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
