import { Component } from '@angular/core';
import { ChildaComponent } from '../childa/childa.component';
import { ChildbComponent } from '../childb/childb.component';

@Component({
  selector: 'app-parent',
  imports: [ChildaComponent,ChildbComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  childa:string="i am coming from parent";
  childb:string="i am coming from parent"
}
