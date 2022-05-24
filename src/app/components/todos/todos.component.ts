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

  inputTodo:string = "";
  constructor() { }
 
  ngOnInit(): void {

    this.todos = [
      {
        content: 'First Todo',
        completed: true
      },
      {
        content: 'Second Todo',
        completed: false
      },
      {
        content: 'Third Todo',
        completed: false
      },
      {
        content: 'Fourth Todo',
        completed: true
      }
    ];
  }
//A method that will allow us to complete a todo by clicking on it
//Here we are looping through all our Todos and checking all our Todos to see if our ID matches the id we have (id: number)
//Here we are looping through all our Todos and checking if our int matches the id we have (id: number), if so then its gonna complete 
toggleDone (id: number){
    this.todos.map((v, i) =>{ 
      if( i == id) v.completed = !v.completed;


      return v;
    }) 
}

deleteTodo(id: number){
  //if i is not an id then we are not gona return it
  this.todos = this.todos.filter((v, i) => i==id);
}

addTodo(){
  this.todos.push({
    content: this.inputTodo,
    completed: false
  });

  this.inputTodo = "";
}

}
