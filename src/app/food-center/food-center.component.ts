import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';
    
@Component({
  selector: 'app-food-center',
  templateUrl: './food-center.component.html',
  styleUrls: ['./food-center.component.css'],
  providers: [FoodService]
})
export class FoodCenterComponent implements OnInit {

  foods: Array<Food>;

  selectedFood: Food;
  private hidenewFood:boolean = true;

  constructor(private _foodService : FoodService) { }

  ngOnInit() {
    this._foodService.getFoods()
    .subscribe(resFoodData => this.foods = resFoodData);
  }

  onSelectFood(note:any){
    this.selectedFood = note;
    this.hidenewFood = true;
    console.log(this.selectedFood);
  }

  onSubmitAddValue(note : Food){
      this._foodService.addFood(note)
      .subscribe(resNewNote => {
        // This code is mainly used for updated notes show in UI 
          this.foods.push(resNewNote);
          this.hidenewFood = true;
          this.selectedFood = resNewNote;
      });
  }

  onUpdateFoodEvent(note : any){
    this._foodService.updateFood(note)
    .subscribe(resUpdateNote => note = resUpdateNote);
    this.selectedFood = null;
  };

  onDeleteFoodEvent(note : any){
      let noteArray = this.foods;
      this._foodService.deleteFood(note)
      .subscribe(resDeletedNote => {
        for(let i=0;i < noteArray.length ; i++){
          if(noteArray[i]._id === note._id)
          {
            noteArray.splice(i,1);
          }
        }
      });
      this.selectedFood = null;
  };

  newNote(){
      this.hidenewFood = false;
  }

}
