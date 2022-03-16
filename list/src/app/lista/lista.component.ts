import { Component, ElementRef, ViewChild, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  /* TAREFA_KEY = 'tarefa_key'
  listaTarefas : any[] = []

  constructor() { }

  ngOnInit(): void {
    const tarefas = localStorage.getItem(this.TAREFA_KEY)
  if (tarefas){
    this.listaTarefas = JSON.parse(tarefas)
  }
  } */

  /* @ViewChild('inputTarefas')
  ipt!: ElementRef
  
  add(valor: string): void {
    this.listaTarefas.push(valor)
    this.ipt.nativeElement.value = ''
    this.salvarLista()
  }

  deletar(valor: number, remover: number): void {
    this.listaTarefas.splice(valor, remover)
    this.ipt.nativeElement.value = ''
    this.salvarLista() 
  }*/

  /* add(nomeTarefa: string) {
      this.listaTarefas.push({id: this.listaTarefas.length, nome: nomeTarefa}) 
      this.salvarLista()
  }
  
  deletar(id: number) {
    this.listaTarefas = this.listaTarefas.filter(item => (item.id != id))
    this.salvarLista()
  }

  private salvarLista(){
    localStorage.setItem(this.TAREFA_KEY, JSON.stringify(this.listaTarefas))
  } */
 
  /* dadoLocalStorage: Array<string> = []

  ngOnInit(): void {
    this.recuperarDadosDoLocalStorage()
  }

  salvarNoLocalStorage(valor: string): void {
    this.dadoLocalStorage?.push(valor)
    let arrStr = JSON.stringify(this.dadoLocalStorage)
    localStorage.setItem('dado', arrStr)
    this.recuperarDadosDoLocalStorage()
    /* localStorage.setItem('dado', valor)
    this.dadoLocalStorage = valor 
  }

  recuperarDadosDoLocalStorage(): void {
    let storage = localStorage.getItem('dado')
    let arr = JSON.parse(storage || '[]')
    this.dadoLocalStorage = arr
    /* this.dadoLocalStorage = localStorage.getItem('dado') 
  }

  deletarDoLocalStorage(index: number): void {
    this.dadoLocalStorage?.splice(index, 1)

    let arrStr = JSON.stringify(this.dadoLocalStorage)
    localStorage.setItem('dado', arrStr)
    this.recuperarDadosDoLocalStorage()
  } */

}
