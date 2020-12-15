import { Recipe } from './../recipe.model';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent  {
  recipes: Recipe[] = [
    new Recipe('recipe-test', 'a recipe', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'),
    new Recipe('recipe-test-2', 'a recipe 2', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  // tslint:disable-next-line:typedef
  onRecipeItem(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
