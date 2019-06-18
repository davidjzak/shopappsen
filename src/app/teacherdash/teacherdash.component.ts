import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacherdash',
  templateUrl: './teacherdash.component.html',
  styleUrls: ['./teacherdash.component.scss']
})
export class TeacherdashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  courses = ['Fire Training', 'Rescue Techniques', 'Rescue Carries'];



  pushCourse(){
    console.log('entered');
this.courses.push('tree');

  }
}
