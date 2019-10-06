import { Component, Input, OnInit } from '@angular/core';
import { Tile } from '../models/Tile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() state: Tile;

  constructor() {}

  ngOnInit() {
    console.log('got state ', this.state);
  }
}
