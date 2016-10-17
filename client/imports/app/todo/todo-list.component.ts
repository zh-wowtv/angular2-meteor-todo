import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Todo } from '../../../../both/models/todo.model';
import { TodoCollection } from '../../../../both/collections/todos.collection';
import { TodoDataService } from './todo-data.service';

import template from './todo-list.component.html';
import style from './todo-list.component.scss';

// TODO: todo-item seperated?
@Component({
  selector: 'todo-list',
  template,
  styles: [style]
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Observable<Todo[]>;  

	constructor(private todoDataSvc : TodoDataService) {}

  ngOnInit() {    
    this.todos = this.todoDataSvc.getData().zone();
  }

  ngOnDestroy() {    
  }

  deleteTodo(todo: Todo) {    
    // TODO: prompt
    this.todoDataSvc.deleteTodo(todo);
  }

  nameChanged(todo: Todo) {
		this.todoDataSvc.updateTodo(todo);
  }

  completeTodo(todo: Todo,completed: boolean) {
    // this.checked = completed ? "checked" : "";
    this.todoDataSvc.completeTodo(todo, completed)
  }
}
