import { Component } from '@angular/core';
import { Todo } from './shared/todo';


@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.components.css']
})
export class AppComponent {
  name: string = 'Angular'; 

} 
