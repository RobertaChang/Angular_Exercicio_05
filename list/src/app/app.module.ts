import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ListaComponent } from './lista/lista.component';
import { TodoBtnClearComponent } from './todo-btn-clear/todo-btn-clear.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { StyledDirective } from './styled.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    TodoBtnClearComponent,
    TodoContainerComponent,
    StyledDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
