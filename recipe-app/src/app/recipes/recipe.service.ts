import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chorizo Mozarella Gnocchi Baked',
      'baked chorizzo with morarella and gnocchi',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
      [
        new Ingredient('Chrizo', 2),
        new Ingredient('Mozrella', 1),
        new Ingredient('Potates', 2)
      ]),
    new Recipe(
      'Shakshuka',
      'tomato sos with poached eggs',
      'https://media.eggs.ca/assets/RecipeThumbs/_resampled/FillWyIxMjgwIiwiNzIwIl0/Shakshuka-For-One.jpg',
      [
        new Ingredient('Eggs', 6),
        new Ingredient('Tomatoes', 2)
      ])
  ];

  // tslint:disable-next-line:typedef
  getRecipes() {
    return this.recipes.slice();
  }

  // tslint:disable-next-line:typedef
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  constructor(private shoppingListService: ShoppingListService) { }

}
