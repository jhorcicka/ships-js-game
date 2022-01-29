import { Board } from './board'
import { PlayerType} from './playertype'

export class Player {
  playerType: PlayerType
  board: Board
  active: boolean
  shotHistory: number[] = []

  constructor(playerType: PlayerType, board: Board, active: boolean){
    this.playerType = playerType
    this.board = board
    this.active = active
  }

  getBoard(): Board {
    return this.board
  }

  generateAttackIndex(): number {
    let index = -1
    do {
      index = this.getBoard().generateRandomIndex()
    } while (this.isInHistory(index))
    this.shotHistory.push(index)
    return index
  }

  isInHistory(index: number): boolean {
    return this.shotHistory.indexOf(index) >= 0
  }

}
