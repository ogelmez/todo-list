import { Action } from '@ngrx/store';
import { ToDo, } from './todo.model';

export enum ToDoActionTypes {
  AddToDo = '[Todo] Add Todo',
  ChangeTaskStatus = '[Todo] ChangeTaskStatus Todo',
  DeleteToDo = '[Todo] DeleteToDo Todo'
}

export class AddToDo implements Action {
  readonly type = ToDoActionTypes.AddToDo;
  constructor(public payload: ToDo) { }
}

export class ChangeTaskStatus implements Action {
  readonly type = ToDoActionTypes.ChangeTaskStatus;
  constructor(public payload: ToDo) { }
}

export class DeleteToDo implements Action {
  readonly type = ToDoActionTypes.DeleteToDo;
  constructor(public payload: ToDo) { }
}

export type ToDoActions =
  | AddToDo
  | ChangeTaskStatus
  | DeleteToDo;