import { Component, DoCheck } from '@angular/core';
//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Realmente deseja deletar todos os itens da lista?");
    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmitTaskList(event: string) {
    //console.log(event);
    this.taskList.push({ task: event, checked: false })
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Task vazia! Deseja apagar esté campo?");
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }

  ngDoCheck() {
    this.setLocalStorage();
  }

  constructor() { }

}


/*

{ task: "Nova Task", checked: true },
{ task: "Nova Task 2", checked: false }

*/
