import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ToDo } from './todo.model';
import { ToDoState, toDoAdapter } from './todo.reducer';

export const selectToDoState = createFeatureSelector<ToDoState>('todo');

export const {
  selectAll: allToDos,
} = toDoAdapter.getSelectors(selectToDoState);

export const toDosSelector = createSelector(allToDos, (toDos: Array<ToDo>) => toDos.map(toDo => toDo));