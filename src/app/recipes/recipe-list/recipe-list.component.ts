import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
  	new Recipe('A Test Recipe', 'This is simply Test', 'https://c.pxhere.com/photos/62/1c/eat_cheese_kohlrabi_tomatoes_au_gratin_meal_olives_cook-1292471.jpg!d'),
  	new Recipe('A Test2 Recipe', 'This is simply Test2', 'https://c.pxhere.com/photos/62/1c/eat_cheese_kohlrabi_tomatoes_au_gratin_meal_olives_cook-1292471.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
