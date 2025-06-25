import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseLectureComponent } from '../course-lecture/course-lecture.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-course-section',
  imports: [ReactiveFormsModule,CourseLectureComponent,NgFor],
  templateUrl: './course-section.component.html',
  styleUrl: './course-section.component.css'
})
export class CourseSectionComponent implements OnInit{

  @Input() sectionFormGroup!:FormGroup;
  @Output() sectionEmitter = new EventEmitter<string>();
  @Output() removeSectionEmitter = new EventEmitter<number>();
  @Input() index!:number;

  sectionCreated:boolean = false;
  sectionTitle:string = "";

 ngOnInit(): void {

 }


  handleSection(){
    //create section call apis and get the section id to update in future again
    const sectionTitle = this.sectionFormGroup.get('sectionTitle')?.value;
    this.sectionCreated=true;
    this.sectionTitle=sectionTitle;
  }

  handleEdit(){
    //use that id to edit the things or change the values
    this.sectionCreated=false;
  }

  handleRemove(){
    this.removeSectionEmitter.emit(this.index);
  }

  AddLecture(){
    //call lecture api -> handle lecture apis after handling of forms
    const lectureForm = new FormGroup({
      lectureid:new FormControl(null),
      lecturetitle:new FormControl("",[Validators.required]),
      resources:new FormArray([])
    })
    this.Lectures.push(lectureForm);
  }


  get Lectures(){
    return (this.sectionFormGroup.get('lectures') as FormArray).controls as  FormGroup[];
  }

}
