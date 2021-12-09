import { Player } from './player'

export class Game {
  userPlayer: Player
  aiPlayer: Player

  constructor(userPlayer: Player, aiPlayer: Player) {
    this.userPlayer = userPlayer
    this.aiPlayer = aiPlayer
  }

  start(): void {
    this.userPlayer.getBoard().draw()
    this.aiPlayer.getBoard().draw()
  }
  update(): void {}
  finish(): void {}

  getAIPlayer(): Player {
    return this.aiPlayer
  }

}

