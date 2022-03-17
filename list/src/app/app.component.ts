import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list';
  
  constructor(
    private _snackBar: MatSnackBar
  ){
  
    this.load();
  }

  tasks: Array<string> = []
  
  @ViewChild('inpt')
  ipt!: ElementRef

  @Output()
  btnClickEvent: EventEmitter<any> = new EventEmitter<any>()

  emitirEvento(): void {
    this.btnClickEvent.emit()
  }

  add(valor: string): void {
    this.tasks.push("" + valor)
    this.ipt.nativeElement.value = ''
    this.save()
  }
  
  del(valor: string): void {
    this.tasks.splice(this.tasks.indexOf(valor), 1)
    this.save()
  }
  
  clear(): void {
    this.tasks.splice(0, this.tasks.length)
    this.save()
  }
  
  save(): void {
    localStorage.setItem('Infos', JSON.stringify(this.tasks))
  }
  
  load(): void {
    if(localStorage.getItem('Infos') != null) {
      this.tasks = JSON.parse('' + localStorage.getItem('Infos'))
    }
  }

  snackBar(): void {
    this._snackBar.open('Você deletou um item da sua lista', 'Fechar')
  }

}
