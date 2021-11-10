import { Ship } from './ship'
import { ShipType } from './shiptype'
import { Cell } from './cell'

export class Board {
  ships: Ship[]
  boardCells: Cell[]

  constructor(cells: Cell[]){
    this.ships = []
    this.boardCells = cells
    this.ships.push(this.generateShip(ShipType.LINE_SHAPE))
    this.ships.push(this.generateShip(ShipType.CUBE_SHAPE))
    this.ships.push(this.generateShip(ShipType.T_SHAPE))
  }

  generateShip(shipType: ShipType): Ship {
    let cells: Cell[] = []
    if (ShipType.LINE_SHAPE == shipType) {
         cells.push(this.boardCells[0])
         cells.push(this.boardCells[1])
         cells.push(this.boardCells[2])
         cells.push(this.boardCells[3])
    } else if (ShipType.CUBE_SHAPE == shipType) {
         cells.push(this.boardCells[67])
         cells.push(this.boardCells[68])
         cells.push(this.boardCells[77])
         cells.push(this.boardCells[78])
    } else if (ShipType.T_SHAPE == shipType) {
         cells.push(this.boardCells[35])
         cells.push(this.boardCells[44])
         cells.push(this.boardCells[45])
         cells.push(this.boardCells[46])
    }

    return new Ship(cells)
  }

  draw(): void {
    console.log('board draw')
    this.ships.forEach(ship=>{ship.draw()})
  }

}
