import { Component, OnInit } from '@angular/core';
import { Cell } from './domain/cell'
import { Game } from './domain/game'
import { Player } from './domain/player'
import { PlayerType} from './domain/playertype'
import { Board } from './domain/board'
import { Ship } from './domain/ship'
import { Status } from './domain/status'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'ships';
  userCells: Cell[] = []
  aiCells: Cell[] = []
  CELL_COUNT = 100
  game: Game
  gameStatus: string = ''
  messages: string[] = []
  level = 4

  ngOnInit (): void {}
  constructor (){

    this.userCells = this.createCells("user")
    this.aiCells = this.createCells("ai")
    this.game = new Game(
      new Player(PlayerType.USER, new Board(this.userCells), true),
      new Player(PlayerType.AI, new Board(this.aiCells), false)
    )
    this.game.start()
  }

  createCells(prefix:string): Cell[]{
    let cells: Cell[] = []
    for (let i = 0; i<this.CELL_COUNT;i++) {
      let cell = new Cell(i, prefix)
      cells.push(cell)
    }
    return cells
  }

  onCellClick(cellId:string) {
    let idParts = cellId.split('_')
    if (idParts[0] == 'ai') {
      let numberIndex = parseInt(idParts[1], 10)
      let newStatus = this.aiCells[numberIndex].onClick()
      switch (newStatus) {
        case Status.SHIP_HIT:
          this.checkDestroyedShips(this.game.getAIPlayer(), numberIndex)
          this.addMessage("Hráč zasáhl nepřátelskou loď")
          break
        case Status.WATER_HIT:
          this.addMessage("Hráč zasáhl vodu")
          this.addMessage("Teď hraje AI")
          for (let i = 0; i<=this.level; i++) {
            this.aiRound()
          }
          break
        default:
          break
      }
    }
  }

  aiRound() {
    if (this.isGameOver()){
      return
    }
    let attackIndex = this.game.getAIPlayer().generateAttackIndex()
    let newStatus = this.userCells[attackIndex].onClick()
    switch (newStatus) {
      case Status.SHIP_HIT:
        this.addMessage("AI zasháhlo loď")
        this.checkDestroyedShips(this.game.getUserPlayer(), attackIndex)
        this.aiRound()
        break
      case Status.WATER_HIT:
        this.addMessage("AI zasáhlo vodu")
        this.addMessage("Teď hraje hráč.")
        break
      default:
        break
    }
  }

  checkDestroyedShips(player: Player, cellIndex: number) {
    player.getBoard().checkDestroyedShip(cellIndex)
    if (player.getBoard().checkAllShipsDestroyed()) {
      let playerName = player.playerType == PlayerType.AI ? "Hráč" : "AI"
      this.addMessage("Vítěz: " + playerName)
      this.gameOver()
    }
  }

  isGameOver(): boolean {
    return this.gameStatus == 'visible'
  }

  gameOver() {
    this.gameStatus = 'visible'
  }

  getUserCells(): Cell[] {
    return this.userCells
  }

  getAICells(): Cell[] {
    return this.aiCells
  }

  addMessage(message: string): void {
    let timePrefix = new Date().toLocaleTimeString()
    let newItem = timePrefix+": "+message
    this.messages = [newItem].concat(this.messages)
  }

}
