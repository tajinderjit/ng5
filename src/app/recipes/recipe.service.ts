import { EventEmitter, Injectable } from '@angular/core'
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe('A Test Recipe', 
			'This is simply Test', 
			'https://c.pxhere.com/photos/62/1c/eat_cheese_kohlrabi_tomatoes_au_gratin_meal_olives_cook-1292471.jpg!d',
			[
				new Ingredient('Meat', 1),
				new Ingredient('fries', 10),
			]),
		new Recipe('A Test2 Recipe', 
			'This is simply Test2', 
			'https://c.pxhere.com/photos/62/1c/eat_cheese_kohlrabi_tomatoes_au_gratin_meal_olives_cook-1292471.jpg!d',
			[
				new Ingredient('Buns', 2),
				new Ingredient('fries', 1),
			])
	];

	constructor(private slService: ShoppingListService){

	}


	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]){
		this.slService.addIngredients(ingredients);
	}
}