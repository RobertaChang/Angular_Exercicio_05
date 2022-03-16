import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-btn-clear',
  templateUrl: './todo-btn-clear.component.html',
  styleUrls: ['./todo-btn-clear.component.css']
})
export class TodoBtnClearComponent {
  @Input() 
  tasks: Array<string> = []

  @Output()
  btnClickEvent2: EventEmitter<any> = new EventEmitter<any>()  
  
  @Input() clear(): void {
    this.tasks.splice(0, this.tasks.length)
  }
  
  emitirEvento(): void {
    this.btnClickEvent2.emit()
  }
  
  save(): void {
    localStorage.setItem('Infos', JSON.stringify(this.tasks))
  }
  
  load(): void {
    if (localStorage.getItem('Infos') != null) {
      this.tasks = JSON.parse('' + localStorage.getItem('Infos'))
    }
  }

}
