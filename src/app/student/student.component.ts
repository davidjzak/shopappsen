import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { 


  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      sUsername: ['', [Validators.required]],
      sPassword: ['', Validators.required]
    })
    this.loginForm.valueChanges.subscribe(form => {

      console.log(form)
    })
    this.loginForm.get('sUsername');
    this.loginForm.controls['sPassword'];
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

navigateToFire = () => {
  this.router.navigateByUrl('/fire')
}

}
