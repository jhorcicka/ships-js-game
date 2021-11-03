import { Cell } from './cell'

export class Ship {
  cells: Cell[]

  constructor(cells: Cell[]){
    this.cells = cells
  }
  draw(): void {
      console.log('ship draw')
      this.cells.forEach(cell=>{cell.draw()})
    }
}
