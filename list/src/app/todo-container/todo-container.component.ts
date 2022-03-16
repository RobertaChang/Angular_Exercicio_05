import { Component, Output, ViewChild, ElementRef, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent {

  @ViewChild('inputTarefa')
  ipt!: ElementRef
  
  @Input() tasks: Array<string> = []

  @Output()
  btnClickEvent: EventEmitter<any> = new EventEmitter<any>()

  @Input() emitirEvento(): void {
    this.btnClickEvent.emit()
  }

  @Input() 
  add(valor: string): void {
    this.tasks.push(valor)
    this.ipt.nativeElement.value = ''
    }
  
  @Input() 
  del(valor: string): void {
    this.tasks.splice(this.tasks.indexOf(valor), 1)
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