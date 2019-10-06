import { Component, OnInit, Input } from '@angular/core';
import { Minefield } from '../models/Minefield';
import { Tile } from '../models/Tile';

@Component({
  selector: 'app-main-surface',
  templateUrl: './main-surface.component.html',
  styleUrls: ['./main-surface.component.css']
})
export class MainSurfaceComponent implements OnInit {
  @Input() minefield: Minefield;

  public tile: Tile;

  public boardData = new Set<Tile>();

  constructor() {}

  ngOnInit() {
    this.generateMinefield();
    console.log('bdata, ', this.boardData, this.boardData.size, this.minefield.width);
  }

  private generateMinefield() {
    const x = this.minefield.width;
    const y = this.minefield.height;

    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        this.boardData.add({
          posX: i,
          posY: j,
          isFlagged: false,
          hasMine: false,
          isEmpty: false
        });
      }
    }
  }
}
