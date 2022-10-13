import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-input-add-itens',
  templateUrl: './input-add-itens.component.html',
  styleUrls: ['./input-add-itens.component.scss']
})
export class InputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = " ";

  public submitItemTaskList() {
    //console.log(this.addItemTaskList)
    //trim -> remover espaços dados para não gerar valor
    this.addItemTaskList = this.addItemTaskList.trim();
    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
