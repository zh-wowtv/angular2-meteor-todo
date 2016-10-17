import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoDataService } from './todo/todo-data.service';
import { TODO_DECLARATIONS } from './todo';
import { routes } from './app.routes';
import { ACCOUNT_DECLARATIONS } from './account';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    ...TODO_DECLARATIONS,
    ...ACCOUNT_DECLARATIONS    
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
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {}
