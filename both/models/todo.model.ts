import { CollectionObject } from './collection-object.model';

export interface Todo extends CollectionObject {
  name: string,
  completed: boolean,
  createdAt: Date
} 