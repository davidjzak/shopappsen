import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.scss']
})
export class TeacherloginComponent implements OnInit {

  tloginForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.tloginForm = this.fb.group({
      tUsername: ['', [Validators.required]],
      tPassword: ['', Validators.required]
    })


    console.log(this.router.url);
  }



  navigateToTeacher(){
    this.router.navigateByUrl('/teacherdash')
  }

}
