import { TodoCollection } from '../../../both/collections/todos.collection';

export function preloadTodos() {
  if ( TodoCollection.find().cursor.count() === 0 ) {
		const todos = [
      { 
		    name: "Walk the dog",
	  	  completed: false,
	    	createdAt: new Date()
	    },
      { 
		    name: "Walk the cat",
	  	  completed: false,
	    	createdAt: new Date()
	    },
      { 
		    name: "Do a backflip",
	  	  completed: false,
	    	createdAt: new Date()
	    }
    ]
    todos.forEach( (todo) => TodoCollection.insert(todo));
  }
}