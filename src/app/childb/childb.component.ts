import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childb',
  imports: [],
  templateUrl: './childb.component.html',
  styleUrl: './childb.component.css'
})
export class ChildbComponent {
  @Input() parentdata=""

}
