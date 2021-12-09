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
//       console.log(cell.toString())
      cells.push(cell)
    }
//     console.log("createCells")
    return cells
  }
  onCellClick(cellId:string) {
    let idParts = cellId.split('_')
    if (idParts[0] == 'ai') {
      let numberIndex = parseInt(idParts[1], 10)
      let newStatus = this.aiCells[numberIndex].onClick()
      if (newStatus == Status.SHIP_HIT) {
        this.game.getAIPlayer().getBoard().checkDestroyedShip(numberIndex)
      }
    }
  }


  getUserCells(): Cell[] {
    return this.userCells
  }
  getAICells(): Cell[] {
    return this.aiCells
  }
}
