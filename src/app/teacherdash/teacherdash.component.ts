import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-teacherdash',
  templateUrl: './teacherdash.component.html',
  styleUrls: ['./teacherdash.component.scss']
})
export class TeacherdashComponent implements OnInit {

  coursesobj= null;
  addCourseForm: FormGroup;
  addCourse;
  displayedColumns : string[] = ['courseId', 'courseName', 'courseDesc', 'courseType', 'delete'];

  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder, public dialog: MatDialog) { }

  
  openDialog(element): void {
    const dialogRef = this.dialog.open(DeleteModalDialog, {
     
     // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result == true){
      this.deleteCourse(element);
      }
    });
  }

  ngOnInit() {

    this.addCourse = 0;
    // form builder

    this.addCourseForm = this.fb.group({
      tCourseName: '',
      tDescription: '',
      tTeacherName: ''
    })
    // get data from server
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


addCourseOn(){
  this.addCourse = 1;
}

   untoggleAddCourse(){
     this.addCourse = 0;

  }

  //courses = ['Fire Training', 'Rescue Techniques', 'Rescue Carries'];


  pushCourse(){
  

   let courseName = this.addCourseForm.get('tCourseName').value;
    let desc = this.addCourseForm.get('tDescription').value;
   let teacherName = this.addCourseForm.get('tTeacherName').value;
   const test = [{value: courseName }, {value: desc}, {value: teacherName}];
  
    this.http.post('http://localhost:3000/sendd', test).subscribe(res => {console.log(res)
    
    this.http.get("http://localhost:3000/test").
    subscribe((data) => {
     
      this.coursesobj = data;
      
      for( let i = 0; i < Object.keys(data).length; i++){
      

       // this.courses.push(data[i].courseName);
        this.coursesobj.push()
      }
    
      this.dataSource = new MatTableDataSource<coursesData>(this.coursesobj);
    });})}


  deleteCourse(element){
console.log(element.courseId)
console.log(this.dataSource)

let cId = [{value: element.courseId }];

this.http.post('http://localhost:3000/deletecourse', cId).subscribe(res => {

// updates values
  this.http.get("http://localhost:3000/test").
  subscribe((data) => {
   
    this.coursesobj = data;
    
    for( let i = 0; i < Object.keys(data).length; i++){
    

     // this.courses.push(data[i].courseName);
      this.coursesobj.push()
    }
  
    this.dataSource = new MatTableDataSource<coursesData>(this.coursesobj);
  })


});




  }




} // end class


export interface coursesData {
  courseId: number;
  courseName: string;
  courseDesc?:string; 
  coursetype?:string;
}



@Component({
  selector: 'delete-modal',
  templateUrl: 'deletemodal.html',
  styleUrls: ['./deletemodal.scss']
})
export class DeleteModalDialog {

  constructor( public dialogRef: MatDialogRef<DeleteModalDialog>) {} 
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}