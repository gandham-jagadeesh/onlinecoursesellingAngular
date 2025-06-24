import { Component, inject, OnInit } from '@angular/core';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-curriculum',
  imports: [CreateCourseComponent,CreateCourseComponent],
  templateUrl: './course-curriculum.component.html',
  styleUrl: './course-curriculum.component.css'
})
export class CourseCurriculumComponent implements OnInit{
  
  courseTitle:string = "";
  section:FormGroup[] = [];
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
    this.courseCreated=true;
    this.courseTitle=this.courseForm.get('title')?.value;
  }

  addSection(){
    const sectionGroup = this.fb.group({
      sectionTitle:this.fb.control("",[Validators.required]),
      lectures:this.fb.array([])
    });
    this.section.push(sectionGroup);
  }

  get Sections(){
    return this.courseForm.get('sections') as FormArray;
  }
  

}
