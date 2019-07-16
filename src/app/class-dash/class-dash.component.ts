import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-class-dash',
  templateUrl: './class-dash.component.html',
  styleUrls: ['./class-dash.component.scss']
})
export class ClassDashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }




  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}


