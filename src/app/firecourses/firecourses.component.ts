

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {Globals} from '../../globals';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-firecourses',
  templateUrl: './firecourses.component.html',
  styleUrls: ['./firecourses.component.scss']
})
export class FirecoursesComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private globals: Globals) {
  
   }

   coursesobj = null;
   displayedColumns : string[] = ['courseId', 'courseName', 'courseDesc', 'courseType', 'register'];
   dataSource;
 
   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

   navigateToStudent(element){
    this.router.navigateByUrl('/student')

    console.log(element);
    //add selected course
    this.globals.selectedCourseId = element.courseId;
    this.globals.selectedCourseDesc = element.courseDesc;
    this.globals.selectedCourse = element.courseName;
    localStorage.setItem('courseName', element.courseName );
    localStorage.setItem('courseDesc', element.courseDesc );
    localStorage.setItem('courseId', element.courseId );

    console.log(this.globals.selectedCourse, this.globals.selectedCourseDesc, this.globals.selectedCourseId);


  }

  ngOnInit() {
    console.log(this.globals.selectedCourseId);
    this.http.get("http://localhost:3000/test").
      subscribe((data) => {
       // console.log(typeof data);
        this.coursesobj = data;
       // console.log('this.coursesobj', this.coursesobj)
       // console.log(Object.keys(data).length);
        for( let i = 0; i < Object.keys(data).length; i++){
         // console.log(data[i].courseName)

          //this.courses.push(data[i].courseName);
          this.coursesobj.push()
        }
      
        this.dataSource = new MatTableDataSource<coursesData>(this.coursesobj);

      });


  }

  


  
}



export interface coursesData {
  name: string;
  courseId: number;
}

