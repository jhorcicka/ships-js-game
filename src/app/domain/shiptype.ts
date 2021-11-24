export class ShipType {
  static readonly LINE_SHAPE_TYPE = 1
  static readonly CUBE_SHAPE_TYPE = 2
  static readonly T_SHAPE_TYPE = 3
  static readonly LINE_SHAPE = new ShipType(0, 95, 6, ShipType.LINE_SHAPE_TYPE)
  static readonly CUBE_SHAPE = new ShipType(0, 88, 8, ShipType.CUBE_SHAPE_TYPE)
  static readonly T_SHAPE = new ShipType(10, 96, 7, ShipType.T_SHAPE_TYPE)
  maxIndex: number
  minIndex: number
  modIndex: number
  type: number

  constructor (minIndex: number, maxIndex: number, modIndex: number, type: number) {
    this.minIndex = minIndex
    this.maxIndex = maxIndex
    this.modIndex = modIndex
    this.type = type
  }
  getMaxIndex(): number {
    return this.maxIndex
  }

  getMinIndex(): number {
    return this.minIndex
  }

  getModIndex(): number {
    return this.modIndex
  }
  getArea(index:number): number[] {
    switch(this.type) {
      case ShipType.LINE_SHAPE_TYPE:
        return [index, index+1, index+2, index+3]
      case ShipType.CUBE_SHAPE_TYPE:
        return [index, index+1, index+10, index+11]
      case ShipType.T_SHAPE_TYPE:
        return [index, index+1, index+2, index-9]
      default:
        return []
    }
  }

getCollisionArea(index:number): number[] {
    switch(this.type) {
      case ShipType.LINE_SHAPE_TYPE:
        return this.getArea(index).concat([index-1, index+4, index-11, index-10, index-9, index-8, index-7, index-6,
          index+9, index+10, index+11, index+12, index+13, index+14])
      case ShipType.CUBE_SHAPE_TYPE:
        return this.getArea(index).concat([index-1, index+2, index-11, index-10, index-9, index-8, index+9, index+12, index+19,
          index+20, index+21, index+22])
      case ShipType.T_SHAPE_TYPE:
        return this.getArea(index).concat([index-1, index+3, index+9, index+10, index+11, index+12, index+13, index-11,
          index-10, index-8, index-7, index-20, index-19, index-18])
      default:
        return []
    }
  }
}

