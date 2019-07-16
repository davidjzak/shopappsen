import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit, AfterViewInit {

  minDate = new Date();
  maxDate = new Date(2020, 0, 1);

  addCourseForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder,  private el: ElementRef) { }

  ngOnInit() {
    this.addCourseForm = this.fb.group({
      tFaculty: ['', [Validators.required]],
      tCourseName: ['', Validators.required],
      tFEID: [''],
      tCourseId:[''],
      tFee:[''],
      tMaxSeats:[''],
      tCampus:[''],
      tRoom:[''],
      tStartTime:[''],
      tEndTime:[''],
      tNFPA:[''],
      tDateTest:[''],
      tDesc:['']
    })
    
  }

  ngAfterViewInit(){
    console.log("entered");
    this.el.nativeElement.ownerDocument.body.style.backgroundColor = '#EFEFEF';
  }
}
