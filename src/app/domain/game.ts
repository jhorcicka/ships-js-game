export class Game {
  players: Player[]

  constructor(players: Player[]){
    this.players = players
  }

  start(): void {}
  update(): void {}
  finish(): void {}
}
