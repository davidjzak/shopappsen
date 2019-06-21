import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teacherdash',
  templateUrl: './teacherdash.component.html',
  styleUrls: ['./teacherdash.component.scss']
})
export class TeacherdashComponent implements OnInit {

  coursesobj= null;
  addCourseForm: FormGroup;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {


    // form builder

    this.addCourseForm = this.fb.group({
      tCourseName: '',
      tDescription: '',
      tTeacherName: ''
    })



    // get data from server
    this.http.get("http://localhost:3000/test").
      subscribe((data) => {
        console.log(typeof data);
        this.coursesobj = data;
        console.log('this.coursesobj', this.coursesobj)
        console.log(Object.keys(data).length);
        for( let i = 0; i < Object.keys(data).length; i++){
          console.log(data[i].courseName)

          this.courses.push(data[i].courseName);
          this.coursesobj.push()
        }
      
      
      });

  }

  courses = ['Fire Training', 'Rescue Techniques', 'Rescue Carries'];

  //coursesobj = [];



  pushCourse(){
    console.log('entered');
this.courses.push('tree');

  }
}
