import { MongoObservable } from 'meteor-rxjs';
import { Todo } from "../models/todo.model";

export const TodoCollection = new MongoObservable.Collection<Todo>('todo-collection');