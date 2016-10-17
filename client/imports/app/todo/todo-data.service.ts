import { Injectable } from '@angular/core';
import { ObservableCursor } from 'meteor-rxjs';
import { Observable } from 'rxjs/Observable';

import { Todo } from "../../../../both/models/todo.model";
import { TodoCollection } from "../../../../both/collections/todos.collection";

@Injectable()
export class TodoDataService {
  private data : ObservableCursor<Todo>;

  constructor() {
    this.data = TodoCollection.find({});
  }

  public getData() : ObservableCursor<Todo> {
    return this.data;
  }

  public addTodo(name: string) {
    TodoCollection.insert({
      name: name,
      completed: false,
      createdAt: new Date()
    })
  }

  public deleteTodo(todo: Todo) {
    var confirm = window.confirm("Delete this task?");
    if(confirm){
	    TodoCollection.remove({
	      _id: todo._id
	    })
    }
  }

	// TODO: updated At?
  public updateTodo(todo: Todo) {
    TodoCollection.update({ _id: todo._id}, 
    	{ $set: {
      	name: todo.name
    	}
    })
  }

  public completeTodo(todo: Todo, completed: boolean) {
    TodoCollection.update({ _id: todo._id}, 
    	{ $set: {      	
      	completed: completed
    	}
    })    
  }  

  public getTotalTodos() : Observable<number> {		
    let o : Observable<number> = TodoCollection.find().count();
    o.subscribe( val => {
      console.log(val);
    });
    return o;
	}

  public getCompletedTodos() : Observable<number> {    
    return TodoCollection.find({ completed: true }).count();
  }
}
