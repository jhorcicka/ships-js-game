import { Component, OnInit } from '@angular/core';
import { Cell } from './domain/cell'
import { Game } from './domain/game'
import { Player } from './domain/player'
import { PlayerType} from './domain/playertype'
import { Board } from './domain/board'
import { Ship } from './domain/ship'

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

  ngOnInit (): void {
//     console.log("init")
    this.userCells = this.createCells("user")
    this.aiCells = this.createCells("ai")
    let userShips = [this.generateShip()]
    let aiShips = [this.generateShip()]
    let game = new Game(
      new Player(PlayerType.USER, new Board(userShips), true),
      new Player(PlayerType.AI, new Board(aiShips), false)
    )
    game.start()
  }

  generateShip() {
    let cells: Cell[] = []
    cells.push(this.userCells[0])
    cells.push(this.userCells[1])
    cells.push(this.userCells[2])
    cells.push(this.userCells[3])
    return new Ship(cells)
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
    console.log(cellId)
  }
  getUserCells(): Cell[] {
    return this.userCells
  }
  getAICells(): Cell[] {
    return this.aiCells
  }
}
