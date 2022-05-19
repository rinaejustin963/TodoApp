import { Component, OnInit } from '@angular/core';
import {Todo} from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
//an Array to loop through for all Todos
 // title = "Todos";
  todos!: Todo[];
  constructor() { }
 
  ngOnInit(): void {

    this.todos = [
      {
        content: 'First Todo',
        completed: false
      },
      {
        content: 'Second Todo',
        completed: true
      },
      {
        content: 'Third Todo',
        completed: false
      }
    ];
  }

}
