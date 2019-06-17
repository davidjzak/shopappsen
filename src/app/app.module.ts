import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirecoursesComponent } from './firecourses/firecourses.component';
import { LoginComponent } from './login/login.component';
import { StudentloginComponent } from './student/studentlogin/studentlogin.component';
import { StudentRegisterComponent } from './student/studentRegister/studentRegister.component';
import { StudentComponent } from './student/student.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    FirecoursesComponent,
    LoginComponent,
    StudentloginComponent,
    StudentRegisterComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
