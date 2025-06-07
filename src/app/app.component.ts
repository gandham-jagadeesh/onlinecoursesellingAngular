import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basicApiConsumer';
  users:any=[
    {
      name:"g.jagadeesh",
      age:20,
      skills:"full stack developer"
    },
    {
      name:"k.manikanta",
      age:23,
      skills:"backend developer",
    },
    {
      name:"p.shyam",
      age:40,
      skills:"foodie"
    }
  ]

  showDiv1:boolean=true;
  changeVisibility(){
    this.showDiv1 = !this.showDiv1;
  }
}
