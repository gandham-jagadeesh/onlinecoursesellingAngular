import { Component } from '@angular/core';
import { CreateCourseComponent } from "./create-course/create-course.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-instructor',
  imports: [RouterLink,RouterOutlet
    
  ],
  templateUrl: './instructor.component.html',
  styleUrl: './instructor.component.css'
})
export class InstructorComponent {

}
