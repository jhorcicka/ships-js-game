import { Ship } from './ship'
import { ShipType } from './shiptype'
import { Cell } from './cell'
import { Status } from './status'

export class Board {
  ships: Ship[]
  boardCells: Cell[]
  numberOfDestroyedShips: number = 0

  constructor(cells: Cell[]){
    this.ships = []
    this.boardCells = cells
    this.ships.push(this.generateShip(ShipType.LINE_SHAPE))
    this.ships.push(this.generateShip(ShipType.CUBE_SHAPE))
    this.ships.push(this.generateShip(ShipType.T_SHAPE))
  }

  generateRandomShipIndex(shipType: ShipType): number {
    let index: number
    do {
      index = Math.floor(Math.random()*100)
    } while (this.isNotOnBoard(index, shipType) || this.isInCollision(index, shipType))
    return index
  }

  generateRandomIndex(): number {
    let index: number
    do {
      index = Math.floor(Math.random()*100)
    } while (!this.isOnBoard(index))
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
    let i = this.generateRandomShipIndex(shipType)
    console.log('i=', i)
    shipType.getArea(i).forEach(cellIndex=>{
      let shipCell = this.boardCells[cellIndex]
      shipCell.setStatus(Status.SHIP)
      cells.push(shipCell)
    })

    return new Ship(cells)
  }

  checkDestroyedShip(index: number) {
    this.ships.forEach((ship:Ship)=>{
      ship.getCells().forEach((cell:Cell)=>{
        if (index == cell.getIndex()){
          let destroyed = true
          ship.getCells().forEach((cell2:Cell)=>{
            if (cell2.getStatus() != Status.SHIP_HIT) {
              destroyed = false
              return
            }
          })
          if (destroyed) {
            ship.destroy()
            this.numberOfDestroyedShips += 1
          }
        }
      })
    })
  }

  checkAllShipsDestroyed(): boolean {
    return this.numberOfDestroyedShips == this.ships.length
  }

  draw(): void {
    console.log('board draw')
    this.ships.forEach(ship=>{ship.draw()})
  }

}
