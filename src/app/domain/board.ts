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

  generateRandomIndex(shipType: ShipType): number {
       let index: number
       do {
        index = Math.floor(Math.random()*100)
        } while (index % 10 > shipType.getModIndex() || index<shipType.getMinIndex() || index>shipType.getMaxIndex())
        return index
    }

  generateShip(shipType: ShipType): Ship {
    let cells: Cell[] = []
    let i = this.generateRandomIndex(shipType)
    console.log('i=', i)
    if (ShipType.LINE_SHAPE == shipType) {
         cells.push(this.boardCells[i])
         cells.push(this.boardCells[i+1])
         cells.push(this.boardCells[i+2])
         cells.push(this.boardCells[i+3])
    } else if (ShipType.CUBE_SHAPE == shipType) {
         cells.push(this.boardCells[i])
         cells.push(this.boardCells[i+1])
         cells.push(this.boardCells[i+10])
         cells.push(this.boardCells[i+11])
    } else if (ShipType.T_SHAPE == shipType) {
         cells.push(this.boardCells[i])
         cells.push(this.boardCells[i+1])
         cells.push(this.boardCells[i+2])
         cells.push(this.boardCells[i-9])
    }

    return new Ship(cells)
  }

  draw(): void {
    console.log('board draw')
    this.ships.forEach(ship=>{ship.draw()})
  }

}
