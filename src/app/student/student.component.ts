import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
