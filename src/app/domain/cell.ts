import { Status } from './status';

export class Cell {
  x: number
  y: number
  status: Status

  constructor(x: number, y: number, status: Status){
    this.x = x
    this.y = y
    this.status = status
  }
  onClick(event:object): void {}
  draw(): void {}
}
