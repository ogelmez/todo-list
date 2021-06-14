import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ToDo } from 'src/app/state/todo/todo.model';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent {

  @Input() toDos: ToDo[];

  @Output() toDoChange = new EventEmitter<ToDo>();

  constructor() { }

  onCompleteChange(toDo: ToDo, change: MatCheckboxChange) {
    this.toDoChange.emit({
      ...toDo,
      complete: change.checked
    });
  }
}
