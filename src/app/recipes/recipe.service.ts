import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
	
	recipesChanged = new Subject<Recipe[]>()	

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

	addRecipe(recipe: Recipe){
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, newRecipe: Recipe){
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number){
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
}