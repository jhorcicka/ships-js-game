import { Status } from './status';

export class Cell {
  index: number
  status: Status
  idPrefix: string
  cssClass: string = 'cell'

  constructor(index: number, idPrefix: string){
    this.index = index
    this.status = Status.WATER
    this.idPrefix = idPrefix
  }

  onClick(): Status {
    switch(this.status) {
      case Status.WATER:
        this.status = Status.WATER_HIT
        break
      case Status.SHIP:
        this.status = Status.SHIP_HIT
        break
      default:
        break
    }
    this.draw()
    return this.status
  }

  draw(): void {
    this.cssClass = 'cell'
    switch(this.status) {
      case Status.WATER:
        this.cssClass += ''
        break
      case Status.WATER_HIT:
        this.cssClass += ' water-hit'
        break
      case Status.SHIP:
        this.cssClass += this.idPrefix == "ai" ? ' ship-hidden': " ship"
        break
      case Status.SHIP_HIT:
        this.cssClass += ' ship-hit'
        break
      case Status.SHIP_DESTROYED:
        this.cssClass += ' ship-destroyed'
        break
      default:
        break
      }
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

  setStatus(status: Status): void {
    this.status = status
  }

  getStatus(): Status {
    return this.status
  }

}
