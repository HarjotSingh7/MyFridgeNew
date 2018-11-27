import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css'],
  inputs: ['food'],
  outputs: ['updateFoodEvent','deleteFoodEvent']
})
export class FoodDetailComponent implements OnInit {

  food: any;

  private editTitle: boolean = false;
  private updateFoodEvent = new EventEmitter();
  private deleteFoodEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.editTitle = false;
  }

  onTitleClick(){
    this.editTitle = true;
  }

  updateFood(){
     this.updateFoodEvent.emit(this.food);
  }

  deleteFood(){
    this.deleteFoodEvent.emit(this.food);
  }

}
