import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ToDo } from 'src/app/state/todo/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit, OnDestroy {

  @Output() toDoChange = new EventEmitter<Partial<ToDo>>();

  task: FormControl;

  private unsubscribe = new Subject<void>();

  constructor() { }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit() {
    this.task = new FormControl();
    this.task.valueChanges
      .pipe(debounceTime(200), takeUntil(this.unsubscribe))
      .subscribe(value => this.toDoChange.emit({ task: value }));
  }
}
