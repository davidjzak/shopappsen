

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-firecourses',
  templateUrl: './firecourses.component.html',
  styleUrls: ['./firecourses.component.scss']
})
export class FirecoursesComponent implements OnInit {

  constructor() {
    console.log('const')
   }


   displayedColumns: string[] = ['courseId', 'name'];
   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
 
   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;



  ngOnInit() {
  }

  


  
}



export interface PeriodicElement {
  name: string;
  courseId: number;
}

const ELEMENT_DATA = [
  {courseId: 1, name: 'Fire Rescue' },
  {courseId: 2, name: 'Intro to Business'},
  {courseId: 3, name: 'Intro to Accounting'},
  {courseId: 4, name: 'Ladder Climbing'},
  {courseId: 5, name: 'Intro to Computer'},
  {courseId: 6, name: 'Intro to First Aid'},
  {courseId: 7, name: 'Intro to ...'},
  {courseId: 8, name: 'Intro to ...'},
  {courseId: 9, name: 'Intro to ...'},
  {courseId: 10, name: 'Intro to ...'},
  {courseId: 11, name: 'Intro to ...'},
  {courseId: 12, name: 'Intro to ...'}
];