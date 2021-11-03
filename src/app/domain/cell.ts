import { Status } from './status';

export class Cell {
  index: number
  x: number
  y: number
  status: Status
  idPrefix: string
  cssClass: string = 'cell'

  constructor(index: number, idPrefix: string){
    this.index = index
    this.x = 0
    this.y = 0
    this.status = Status.EMPTY
    this.idPrefix = idPrefix
  }

  onClick(event:object): void {}

  draw(): void {
    this.cssClass += ' ship'
    console.log('cell draw', this.cssClass)
  }

  getIndex(): number {
    return this.index
    }

   getIndexAsString(): string {
    return this.idPrefix+"_"+this.index
   }

   toString(): string {
    return "Cell[idPrefix ="+this.idPrefix+", index="+this.index+",status="+this.status+"]"
   }

  getClass(): string {
    console.log('get class')
    return this.cssClass

  }

}
