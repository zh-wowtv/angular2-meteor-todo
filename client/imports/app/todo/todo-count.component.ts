import { Component } from '@angular/core';
import template from './todo-count.component.html';
import { TodoDataService } from './todo-data.service';
import { Observable } from 'rxjs/Observable';

import { TodoCollection } from '../../../../both/collections/todos.collection';

@Component({
  selector: 'todo-count',
	template
})
export class TodoCountComponent {
  // totalCount : Observable<number>;
  // completedCount: Observable<number>;
  totalCount : number;
  completedCount: number;

  constructor(private todoSvc: TodoDataService) {
		// this.totalCount = this.todoSvc.getTotalTodos().zone();
    // this.completedCount = this.todoSvc.getCompletedTodos().zone();

		// TODO: move to service
    // And I think map is not very efficient
		TodoCollection.find({})
		  .map(tasks => tasks.length)
		  .subscribe(todoCount => {
        this.totalCount = todoCount
      });

		TodoCollection.find({completed:true})
		  .map(tasks => tasks.length)
		  .subscribe(todoCount => {
        this.completedCount = todoCount
      });      
  }
}