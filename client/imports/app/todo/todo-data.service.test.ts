// chai uses as asset library
import { assert } from 'chai';

// Project imports
import { TodoDataService } from './todo-data.service';
import { Observable } from "rxjs";

describe('TodoDataService', () => {
  let todoDataService:TodoDataService;

  beforeEach(() => {
    // Create the service instance
    todoDataService = new TodoDataService();
  });

  it('Should return Observable when requesting the data', () => {
    assert.isTrue(todoDataService.getData() instanceof Observable);
  });
});
