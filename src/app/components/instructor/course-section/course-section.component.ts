import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-section',
  imports: [ReactiveFormsModule],
  templateUrl: './course-section.component.html',
  styleUrl: './course-section.component.css'
})
export class CourseSectionComponent {
  @Input() sectionFormGroup!:FormGroup;
  @Output() sectionEmitter = new EventEmitter<string>();

  handleSection(){
    //create section call apis ->
  }

  handleAddLecture(){
    //call lecture api -> handle lecture apis after handling of forms
  }

}
