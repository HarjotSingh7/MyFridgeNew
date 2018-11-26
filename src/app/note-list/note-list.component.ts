import { Component, OnInit, EventEmitter } from '@angular/core';
import { Food } from '../food';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  inputs: ['foods'],
  outputs: ['SelectFood']
})
export class NoteListComponent implements OnInit {

  public SelectFood = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(foo: Food){
    this.SelectFood.emit(foo);
  }

}
