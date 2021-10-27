import { Component } from '@angular/core';
import { Cell } from './domain/cell'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ships';
  userCells: Cell[] = []
  aiCells: Cell[] = []
  CELL_COUNT = 100
  createCells(prefix:string): Cell[]{
    let cells: Cell[] = []
    for (let i = 0; i<this.CELL_COUNT;i++) {
      let cell = new Cell(i, prefix)
      console.log(cell.toString())
      cells.push(cell)
    }

    return cells
  }
  onCellClick(cellId:string) {
    console.log(cellId)
  }
  getUserCells(): Cell[] {
    if (this.userCells.length == 0) {
      this.userCells = this.createCells("user")
    }
    return this.userCells
  }
  getAICells(): Cell[] {
    if (this.aiCells.length == 0) {
      this.aiCells = this.createCells("ai")
    }
    return this.aiCells
  }
}
