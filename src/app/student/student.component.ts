import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Globals} from '../../globals'



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  selectedCourse: string;
  selectedCourseDesc: string;
  selectedCourseId: number;

  constructor(private globals: Globals, private router: Router, private fb: FormBuilder) { 


  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      sUsername: ['', [Validators.required]],
      sPassword: ['', Validators.required]
    })


    this.registerForm = this.fb.group({
      sTitle: ['', [Validators.required]],
      sDOB: ['', Validators.required],
      sGender:[''],
      sGivenName:[''],
      sMiddleName:[''],
      sLastName:[''],
      sAddress1:[''],
      sAddress2:[''],
      sPostalCode:[''],
      sCity:[''],
      sOEN:[''],
      sCountry:[''],
      sProvince:[''],
      sHomePhone:[''],
      sDayTimePhone:[''],
      sCellPhone:['']
    })




  //   this.loginForm.valueChanges.subscribe(form => {

  //     console.log(form)
  //   })
  //   this.loginForm.get('sUsername');
  //   this.loginForm.controls['sPassword'];


   this.selectedCourse = localStorage.getItem('courseName');
   this.selectedCourseDesc = localStorage.getItem('courseDesc');
   this.selectedCourseId = Number(localStorage.getItem('courseId'));
   }



 sLogIn: boolean = false;
 sRegister: boolean = false;

 
selectLoginOption(option){
if (option == 0){
  this.sLogIn = true;
  this.sRegister = false;

}else if(option == 1){
  this.sLogIn = false;
  this.sRegister = true;

}
}
 
reset(){
  this.sLogIn = false;
  this.sRegister = false;
}




navigateToCourses = () => {
  this.router.navigateByUrl('/fire')
}

}
