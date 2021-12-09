import { Cell } from './cell'
import { Status } from './status'

export class Ship {
  cells: Cell[]

  constructor(cells: Cell[]){
    this.cells = cells
  }
  draw(): void {
      console.log('ship draw', this.cells)
      this.cells.forEach(cell=>{cell.draw()})
    }

  getCells(): Cell[] {
    return this.cells
  }

  destroy(){
    this.cells.forEach(cell=>{
      cell.setStatus(Status.SHIP_DESTROYED)
    })
    this.draw()
  }
}

