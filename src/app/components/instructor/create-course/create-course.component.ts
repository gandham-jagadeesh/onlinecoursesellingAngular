import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  imports: [ReactiveFormsModule],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent implements OnInit{
  @Input() courseTitleFormGroup!:FormGroup;
  @Output() courseTitleEventEmitter = new EventEmitter<string>();

  ngOnInit(): void {

  }

  get title(){
    return this.courseTitleFormGroup.get('title');
  }

   handleCreate(){
    return this.courseTitleEventEmitter.emit('created');
  }
}
