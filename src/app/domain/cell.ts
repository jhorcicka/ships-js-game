import { Status } from './status';

export class Cell {
  x: int
  y: int
  status: Status

  onClick(event): void {}
  draw(): void {}
}
