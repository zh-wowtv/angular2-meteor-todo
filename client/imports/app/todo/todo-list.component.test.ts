// chai uses as asset library
import {assert} from 'chai';

// Angular 2 tests imports
import {TestBed, TestModuleMetadata} from "@angular/core/testing";

// Project imports
import { TodoListComponent} from './todo-list.component';
import { Todo } from "../../../../both/models/todo.model";
import { TodoDataService } from "./todo-data.service";
import {Observable, Subject, BehaviorSubject} from "rxjs";

describe('TodoListComponent', () => {
  let todoComponentInstance: TodoListComponent;
  let todoComponentElement;
  let componentFixture;

  let mockData = new BehaviorSubject([]);
  mockData.next([
    <Todo>{
      name: 'Test',
      completed: false
    }
  ]);

  let mockDataService = {
    getData: () => mockData
  };

  beforeEach(() => {
    TestBed.configureTestingModule(<TestModuleMetadata>{
      declarations: [TodoListComponent],
      providers: [
        {provide: TodoDataService, useValue: mockDataService}
      ]
    });

    componentFixture = TestBed.createComponent(TodoListComponent);
    todoComponentInstance = componentFixture.componentInstance;
    todoComponentElement = componentFixture.debugElement;
  });

  describe('@Component instance', () => {

    it('Should have an Observable (from the mock) of the instance', () => {
      todoComponentInstance.ngOnInit();
      assert.isTrue(todoComponentInstance.todos instanceof Observable);
    });

    it('Should have an items in the Observable', (done) => {
      todoComponentInstance.ngOnInit();
      assert.isTrue(todoComponentInstance.todos instanceof Observable);

      todoComponentInstance.todos.subscribe((data) => {
        assert.equal(data.length, 1);
        assert.typeOf(data, 'array');

        done();
      });
    });
  });

  describe('@Component view', () => {

    it('Should display a list of items in the screen', () => {
      componentFixture.detectChanges();
      assert.isNotNull(todoComponentElement.nativeElement.querySelector('ul'));
    });
  });
});
