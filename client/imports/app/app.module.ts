import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoDataService } from './todo/todo-data.service';
import { TODO_DECLARATIONS } from './todo';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    ...TODO_DECLARATIONS    
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    TodoDataService
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {}
