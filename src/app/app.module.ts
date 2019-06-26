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
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { TeacherdashComponent, DeleteModalDialog } from './teacherdash/teacherdash.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';
import {Globals} from '../globals';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    FirecoursesComponent,
    LoginComponent,
    StudentloginComponent,
    StudentRegisterComponent,
    StudentComponent,
    TeacherdashComponent,
    TeacherloginComponent,
    DeleteModalDialog

    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
   MatTableModule,
   ReactiveFormsModule,
   FormsModule,
   MatDialogModule
   

  ],
  entryComponents: [DeleteModalDialog],
  providers: [ Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
