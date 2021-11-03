import { Ship } from './ship'

export class Board {
  ships: Ship[]

  constructor(ships: Ship[]){
    this.ships = ships
  }

  draw(): void {
    console.log('board draw')
    this.ships.forEach(ship=>{ship.draw()})
  }

}
