import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-lecture',
  imports: [ReactiveFormsModule],
  templateUrl: './course-lecture.component.html',
  styleUrl: './course-lecture.component.css'
})
export class CourseLectureComponent {

  @Input() lectureFormComponent!:FormGroup;
  @Output() titleEventEmitter = new EventEmitter<string>();
  @Input() index!:number;
}
