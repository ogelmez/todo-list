import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { common } from "../../assets/common/http.common"
import { ToDo } from '../state/todo/todo.model';


@Injectable({
    providedIn: 'root',
})
export class TodoService {

    constructor(private http: HttpClient) { }

    getTodos(
        url: string
    ) {
        if (url) {
            return this.http.get<ToDo[]>(`${common.apiUrl}/${url}`)
                .pipe(
                    catchError(this.handleError)
                );
        }
    }

    addToDoItem(url: string, todoItem: ToDo) {
        if (url) {
            return this.http.post(`${common.apiUrl}/${url}`, todoItem)
                .pipe(
                    catchError(this.handleError)
                )
        }
    }

    deleteToDoItem(url: string, id: number) {
        if (url) {
            return this.http.delete(`${common.apiUrl}/${url}/${id}`)
                .pipe(
                    catchError(this.handleError)
                )
        }
    }

    handleError(error: HttpErrorResponse) {
        return throwError(error);
    }
}