import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import template from './add-todo.component.html';
import { TodoDataService } from './todo-data.service';
import { TodoCollection } from '../../../../both/collections/todos.collection';

@Component({
  selector: 'add-todo',
  template
})
export class AddTodoComponent implements OnInit, OnDestroy {
	
  addForm : FormGroup;

  constructor(private formBuilder: FormBuilder, private todoSvc: TodoDataService) {}

  ngOnInit() {
		this.addForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  ngOnDestroy() {

  }

  addTodo() {
    if (this.addForm.valid) {
      this.todoSvc.addTodo(this.addForm.value.name);
			this.addForm.reset();
    }
  }
}