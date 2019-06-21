import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-teacherdash',
  templateUrl: './teacherdash.component.html',
  styleUrls: ['./teacherdash.component.scss']
})
export class TeacherdashComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get("http://jsonplaceholder.typicode.com/users").
    //   subscribe((data) => console.log(data));

    this.http.get("http://localhost:3000/test").
      subscribe((data) => {console.log(data);

        console.log(Object.keys(data).length);
        for( let i = 0; i < Object.keys(data).length; i++){
          console.log(data[i].courseName)

          this.courses.push(data[i].courseName);
        }
      
      
      });

  }

  courses = ['Fire Training', 'Rescue Techniques', 'Rescue Carries'];



  pushCourse(){
    console.log('entered');
this.courses.push('tree');

  }
}
