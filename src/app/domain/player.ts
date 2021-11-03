import { Board } from './board'
import { PlayerType} from './playertype'

export class Player {
  playerType: PlayerType
  board: Board
  active: boolean

  constructor(playerType: PlayerType, board: Board, active: boolean){
    this.playerType = playerType
    this.board = board
    this.active = active
  }

  getBoard(): Board {
    return this.board
  }

}
