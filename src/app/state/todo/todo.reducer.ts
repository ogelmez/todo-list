import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import { ToDoActionTypes, ToDoActions } from './todo.actions';
import { ToDo } from './todo.model';

export interface ToDoState extends EntityState<ToDo> { }

export const toDoAdapter: EntityAdapter<ToDo> = createEntityAdapter<ToDo>();

export const initialSiteState: ToDoState = toDoAdapter.getInitialState();

export function toDoReducer(state: ToDoState = initialSiteState, action: ToDoActions) {
  switch (action.type) {

    case ToDoActionTypes.AddToDo:
      return toDoAdapter.addOne(action.payload, state); 

    case ToDoActionTypes.ChangeTaskStatus:
      return toDoAdapter.updateOne({
        id: action.payload.id,
        changes: {
          ...action.payload,
          complete: action.payload.complete
        }
      }, state);

    case ToDoActionTypes.DeleteToDo:
      return toDoAdapter.removeOne(action.payload.id, state);

    default: {
      return state;
    }
  }
}