import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { State } from 'src/app/state/state.interface';
import {toDosSelector } from 'src/app/state/todo';
import { AddToDo, ChangeTaskStatus } from 'src/app/state/todo/todo.actions';
import { ToDo } from 'src/app/state/todo/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  toDosSelector: Observable<Array<ToDo>>;

  private _toDo: Partial<ToDo>;

  constructor(private store: Store<State>, private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
    this.toDosSelector = this.store.pipe(select(toDosSelector));
  }

  getTodos() {
    this.todoService.getTodos("todos").subscribe(data => {
      data.forEach(item => this.store.dispatch(new AddToDo(item)));
    })
  }

  addToDo() {
    const body = {
      id: Math.random(),
      complete: false,
      task: this._toDo.task
    }
    this.todoService.addToDoItem("todos", body).subscribe();
    this.store.dispatch(new AddToDo(body));
  }

  onAddToDoChange(toDo: Partial<ToDo>) {
    this._toDo = toDo;
  }

  onCompleteToDo(toDo: ToDo) {
    this.store.dispatch(new ChangeTaskStatus(toDo));
  }

}
