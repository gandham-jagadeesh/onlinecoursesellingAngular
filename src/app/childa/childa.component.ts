import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childa',
  imports: [],
  templateUrl: './childa.component.html',
  styleUrl: './childa.component.css'
})
export class ChildaComponent {
 @Input() parentdata=""

 constructor(){
  console.log(this.parentdata);
 }
}
