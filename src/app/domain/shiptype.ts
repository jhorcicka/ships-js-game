export class ShipType {
  static readonly LINE_SHAPE = new ShipType(0, 95, 6)
  static readonly CUBE_SHAPE = new ShipType(0, 88, 8)
  static readonly T_SHAPE = new ShipType(10, 96, 7)
  maxIndex: number
  minIndex: number
  modIndex: number

  constructor (minIndex: number, maxIndex: number, modIndex: number) {
    this.minIndex = minIndex
    this.maxIndex = maxIndex
    this.modIndex = modIndex
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
}

