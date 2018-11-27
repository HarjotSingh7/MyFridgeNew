import { Component, OnInit, EventEmitter } from '@angular/core';
import { Food } from '../food';

@Component({
  selector: 'food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
  inputs: ['foods'],
  outputs: ['SelectFood']
})
export class FoodListComponent implements OnInit {

  public SelectFood = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(foo: Food){
    this.SelectFood.emit(foo);
  }

}
