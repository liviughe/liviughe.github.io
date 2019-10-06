import { Component, OnInit } from '@angular/core';
import { DifficultyList } from './models/difficulty-list';
import { Minefield } from './models/Minefield';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public difficulty = DifficultyList;
  public minefield: Minefield = {} as Minefield;

  public ngOnInit() {
    this.createMineField(this.difficulty.BEGINNER);
  }

  public createMineField(difficulty) {
    switch (difficulty) {
      case this.difficulty.BEGINNER:
        {
          this.minefield.height = 9;
          this.minefield.width = 9;
          this.minefield.mines = 10;
        }
        break;
      case this.difficulty.INTERMEDIATE:
        {
          this.minefield.height = 16;
          this.minefield.width = 16;
          this.minefield.mines = 40;
        }
        break;
      case this.difficulty.EXPERT:
        {
          this.minefield.height = 30;
          this.minefield.width = 30;
          this.minefield.mines = 99;
        }
        break;
      default:
        alert('difficulty selection error');
    }
  }
}
