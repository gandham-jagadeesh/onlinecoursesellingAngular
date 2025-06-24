import { Component, inject, OnInit } from '@angular/core';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseSectionComponent } from "../course-section/course-section.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-course-curriculum',
  imports: [CreateCourseComponent, CreateCourseComponent, CourseSectionComponent,NgFor],
  templateUrl: './course-curriculum.component.html',
  styleUrl: './course-curriculum.component.css'
})
export class CourseCurriculumComponent implements OnInit{
  
  courseTitle:string = "";
  courseCreated:boolean = false;

  fb:FormBuilder = inject(FormBuilder);
  courseForm!:FormGroup;
  
  ngOnInit(): void {
    this.courseForm = this.fb.group({
      id:null,
      title: ["",[Validators.required,Validators.minLength(10)]],
      sections:this.fb.array([])
    });
  }


  addCourse(status:string){
    //call course status and loads in the fb as here id can be null right
   console.log(status);
    this.courseCreated=true;
    this.courseTitle=this.courseForm.get('title')?.value;
  }

  addSection(){
    const sectionGroup = this.fb.group({
      sectionTitle:this.fb.control("",[Validators.required]),
      lectures:this.fb.array([])
    });
    this.Sections.push(sectionGroup);
  }

  get Sections(){
    return (this.courseForm.get('sections') as FormArray).controls as FormGroup[];
  }


}
