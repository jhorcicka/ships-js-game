import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ships';
  CELL_COUNT = 100
  getCells(prefix:string){
    let cells = []
    for (let i = 0; i<this.CELL_COUNT;i++) {
      cells.push({'id':prefix+"_"+i})
    }
    return cells
  }
  onCellClick(cellId:string) {
  console.log(cellId)
  }
}
