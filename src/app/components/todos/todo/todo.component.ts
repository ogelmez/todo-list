import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TodoService } from 'src/app/services/todo.service';
import { DeleteToDo } from 'src/app/state/todo/todo.actions';
import { ToDo } from 'src/app/state/todo/todo.model';
import { State } from 'src/app/state/state.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() toDo: ToDo;

  @Output() completeChange = new EventEmitter<MatCheckboxChange>();
  constructor(private todoService: TodoService, private store: Store<State>) { }

  deleteToDo() {
    this.todoService.deleteToDoItem("todos", this.toDo.id).subscribe();
    this.store.dispatch(new DeleteToDo(this.toDo));
  }
}
