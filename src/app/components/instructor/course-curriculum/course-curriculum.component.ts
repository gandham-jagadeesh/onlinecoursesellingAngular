import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseLectureComponent } from '../course-lecture/course-lecture.component';
import { CourseSectionComponent } from '../course-section/course-section.component';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-curriculum',
  imports: [],
  templateUrl: './course-curriculum.component.html',
  styleUrl: './course-curriculum.component.css'
})
export class CourseCurriculumComponent implements OnInit{
  
  courseTitle:string = "";
  section:FormGroup[] = [];

  fb:FormBuilder = inject(FormBuilder);
  courseForm!:FormGroup;
  
  ngOnInit(): void {
    console.log("initalizing when the component is loading");
    this.courseForm = this.fb.group({
      title: ["",Validators.required],
      sections:this.fb.array([])
    })
  }


  addCourse(){

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
  
  addLecture(){

  }

  addResource(){

  }



}
