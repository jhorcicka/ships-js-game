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
        } while (this.isNotOnBoard(index, shipType) || this.isInCollision(index, shipType))
        return index
    }

  isInCollision(index: number, shipType: ShipType): boolean {
    if (this.ships.length == 0) {
      return false
    }
    let collisionArea = shipType.getCollisionArea(index)
    for (let i=0; i<collisionArea.length; i++){
     if (this.isOnBoard(index) && this.isCellTaken(collisionArea[i])){
        return true
      }
    }
    return false
  }

  isOnBoard(index: number): boolean {
    return index >= 0 && index <= 99
  }

  isCellTaken(index: number): boolean {
     for (let j=0; j<this.ships.length; j++){
       let shipCells = this.ships[j].getCells()
        for (let i=0; i<shipCells.length; i++){
           if (index == shipCells[i].getIndex()){
             return true
        }
       }
     }
     return false
  }

  isNotOnBoard(index: number, shipType: ShipType): boolean {
   return (index % 10 > shipType.getModIndex() || index<shipType.getMinIndex() || index>shipType.getMaxIndex())
  }

  generateShip(shipType: ShipType): Ship {
    let cells: Cell[] = []
    let i = this.generateRandomIndex(shipType)
    console.log('i=', i)
    shipType.getArea(i).forEach(cellIndex=>{
      cells.push(this.boardCells[cellIndex])
    })

    return new Ship(cells)
  }

  draw(): void {
    console.log('board draw')
    this.ships.forEach(ship=>{ship.draw()})
  }

}
